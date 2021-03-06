import Response from "./responseService";
import Request from "./requestService";

export default class index {
  constructor() {
    this.handlers = new Map();
    // [{
    //   method: "GET",
    //   path: "/"
    //   handler: function(req, res)
    // }]
  }

  set(event, context) {
    this.initialized = true;
    this.event = event;
    this.context = context;
    this.req = new Request(this);
    this.res = new Response(this);
  }

  get(path, httpHandler) {
    this.handlers.set( `GET:${path}`, {
      method: "GET",
      path: path,
      handler: httpHandler
    });
  }

  post(path, httpHandler) {
    this.handlers.set( `POST:${path}`, {
      method: "POST",
      path: path,
      handler: httpHandler
    });
  }


  handle() {
    //exact match
    var theRightHandler = this.handlers.get(`${this.req.method}:${this.req.path}`);

    //look for pattern
    //var paths = this.req.url.split("/");

    // // if not found: return default page
    // return (theRightHandler && theRightHandler.handler(this.req, this.res)) || this.res.renderDiagnostic();

    // alternatively if not found: you can send 404 back
    return (theRightHandler && theRightHandler.handler(this.req, this.res)) || this.res.status(404).send();
  }
}
