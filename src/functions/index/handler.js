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
      stage: "dev", //todo: get from serverless
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
  else if (index.path === "/test-harness/query-string") {
    var renderingService = new RenderingService();
    return renderingService.render("test-harness-query-string", {
      stage: "dev", //todo: get from serverless
      queryString: JSON.stringify(event.query, null, 2),
      event: JSON.stringify(event, null, 2),
      context: JSON.stringify(context, null, 2)
    })
    .then((html) => { return context.done(null, html)});
  }

  // if not found: return default page
  return index.res.renderDiagnostic();

  // alternatively if not found: you can send 404 back
  //return index.res.status(404).send();
}
