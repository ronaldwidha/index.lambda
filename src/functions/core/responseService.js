import RenderingService from "../core/renderingService";
import SendStatusService from "./sendStatusService"

export default class ResponseService {
  constructor(event, context) {
    this.event = event;
    this.context = context;
  }

  renderDiagnostic() {
    var renderingService = new RenderingService();
    return renderingService.render("diagnostic", {
      queryString: JSON.stringify(this.event.query, null, 2),
      level1: JSON.stringify(this.event.params.level1),
      level2: JSON.stringify(this.event.params.level2),
      level3: JSON.stringify(this.event.params.level3),
      event: JSON.stringify(this.event, null, 2),
      context: JSON.stringify(this.context, null, 2)
    })
    .then((html) => { return this.context.done(null, html)});
  }

  status(statusCode) {
    // todo: check status code is valid
    var defaultStatusCodeBody = "Sorry. I don't know what to say. You caught me in a bad time.";

    if (statusCode === 404) {
        defaultStatusCodeBody = "Sorry. I can't find the url you're looking for.";
    }
    
    return new SendStatusService(this.context, statusCode, defaultStatusCodeBody);
  }
}
