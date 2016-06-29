import Index from "../core/index";
var index = new Index();

export default (event, context) => {
  // simple website

  // pas request state to the handler
  index.set(event, context);

  // simple router
  if (index.path == "/") {
    return index.res.renderDiagnostic();
  }

  // else if (handler.path === "/test-harness/redirect") {
  //   var renderingService = new RenderingService();
  //
  //   return renderingService.render("test-harness-redirect", {
  //     queryString: JSON.stringify(this.event.query, null, 2),
  //     level1: JSON.stringify(this.event.params.level1),
  //     level2: JSON.stringify(this.event.params.level2),
  //     level3: JSON.stringify(this.event.params.level3),
  //     event: JSON.stringify(this.event, null, 2),
  //     context: JSON.stringify(this.context, null, 2)
  //   })
  //   .then((html) => { return this.context.done(null, html)});
  // }
  // else if (handler.path == "/redirector") {
  //     // an endpoint for the test-harness/redirect
  //     var url = this.event.query.url; //get from query string
  //     return handler.res.redirect(url);
  // }
  // else if (handler.path === "/test-harness/query-string") {
  //   return renderingService.render("test-harness-query-string", {
  //     queryString: JSON.stringify(this.event.query, null, 2),
  //     level1: JSON.stringify(this.event.params.level1),
  //     level2: JSON.stringify(this.event.params.level2),
  //     level3: JSON.stringify(this.event.params.level3),
  //     event: JSON.stringify(this.event, null, 2),
  //     context: JSON.stringify(this.context, null, 2)
  //   })
  //   .then((html) => { return this.context.done(null, html)});
  // }


  return index.res.status(404).send();
}
