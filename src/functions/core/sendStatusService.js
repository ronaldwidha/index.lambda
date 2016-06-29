export default class sendStatusService {
  constructor(context, statusCode, defaultStatusCodeBody) {
    this.context = context;
    this.statusCode = statusCode;
    this.defaultStatusCodeBody = defaultStatusCodeBody;
  }

  send(body) {
    //todo: body
    var apiGWErrorParam = new Error(`statusCode:${this.statusCode}`);
    if (!body) body = this.defaultStatusCodeBody;
    apiGWErrorParam.name = body;
    this.context.done(apiGWErrorParam, {});
  }
}
