export default class sendStatusService {
  constructor(context, responseBuffer) {
    this.context = context;
    this.statusCode = responseBuffer.statusCode;
    this.body = responseBuffer.body;
  }

  send(overrideBody) {

    if (overrideBody) this.body = overrideBody;

    if (this.statusCode === 200) {
      this.context.done(null, this.body);
    }
    else {
      //todo: body
      var apiGWErrorParam = new Error(`statusCode:${this.statusCode}`);
      apiGWErrorParam.name = this.body;
      this.context.done(apiGWErrorParam, {});
    }
  }
}
