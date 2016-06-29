import RenderingService from "../core/renderingService";
import SendStatusService from "./sendStatusService"

export default class ResponseService {
  constructor(index) {
    this.index = index;
    this.responseBuffer = {
      statusCode: null,
      body: null
    }
  }

  renderDiagnostic() {
    var renderingService = new RenderingService();
    return renderingService.render("diagnostic", {
      stage: "dev", //todo: get from serverless
      queryString: JSON.stringify(this.index.event.query, null, 2),
      fullPath: this.index.req.url,
      level1: JSON.stringify(this.index.event.params.level1),
      level2: JSON.stringify(this.index.event.params.level2),
      level3: JSON.stringify(this.index.event.params.level3),
      event: JSON.stringify(this.index.event, null, 2),
      context: JSON.stringify(this.index.context, null, 2)
    })
    .then((html) => {
      this.responseBuffer.body = html;
      return this.status(200).send();
    });

    //return this.index.context.done(null, html)
  }

  redirect(url) {
    return this.status(302).send(url);
  }

  status(statusCode) {
    this.responseBuffer.statusCode = statusCode;

    // todo: check status code is valid

    if (!this.responseBuffer.body) {
      //empty body - so let's get default body
      this.responseBuffer.body = this.getDefaultStatusCodeBody(statusCode);
    }

    return new SendStatusService(this.index.context, this.responseBuffer);
  }

  flush() {
    if (!this.responseBuffer.statusCode) {
      console.log("no response in buffer. Have you forgot to call status() or a render function?");
    }
    return new SendStatusService(this.index.context, this.responseBuffer);
  }

  getDefaultStatusCodeBody(statusCode) {
    var defaultStatusCodeBody = "Sorry. I don't know what to say. You caught me in a bad time.";

    if (statusCode === 200) {
      defaultStatusCodeBody = null;
    }
    if (statusCode === 302) {
      defaultStatusCodeBody = "";
    }
    else if (statusCode === 404) {
      defaultStatusCodeBody = "Sorry. I can't find the url you're looking for.";
    }

    return defaultStatusCodeBody;
  }
}
