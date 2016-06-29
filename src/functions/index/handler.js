import Index from "../core/index";
var index = new Index();

import RenderingService from "../core/renderingService";

export default (event, context) => {
  // simple website

  // pas request state to index.lambda
  index.set(event, context);

  console.log(index.path);

  // simple router

  // homepage
  if (index.path == "/") {
    return index.res.renderDiagnostic();
  }

  // url #1
  else if (index.path === "/test-harness/redirect") {
    var renderingService = new RenderingService();
    return renderingService.render("test-harness-redirect", {
      event: JSON.stringify(event, null, 2),
      context: JSON.stringify(context, null, 2)
    })
    .then((html) => { return context.done(null, html)});
  }

  //url #2: dependency of url #1
  // an endpoint for the test-harness/redirect
  else if (index.path == "/redirector") {
      var url = event.query.url; //get from query string
      return index.res.redirect(url);
  }

  // url #3
  // else if (index.path === "/test-harness/query-string") {
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

  return index.res.renderDiagnostic();
  //return index.res.status(404).send();
}
