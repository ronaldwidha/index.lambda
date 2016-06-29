import Index from "../core/index";
var index = new Index();

import RenderingService from "../core/renderingService";

export default (event, context) => {
  // simple website

  // pas request state to index.lambda
  index.set(event, context);

  // simple router
  // -------------

  // homepage
  index.get("/", function(req, res) {
     return res.renderDiagnostic();
  });

  // url #1
  index.get("/test-harness/redirect", function(req, res) {
    var renderingService = new RenderingService();
    return renderingService.render("test-harness-redirect", {
      stage: "dev", //todo: get from serverless
      event: JSON.stringify(event, null, 2),
      context: JSON.stringify(context, null, 2)
    })
    .then((html) => { return context.done(null, html)});
  });

  //url #2: dependency of url #1
  // an endpoint for the test-harness/redirect
  index.get("/redirector", function(req, res) {
    var url = event.query.url; //get from query string
    return index.res.redirect(url);
  });

  // url #3
  index.get("/redirector", function(req, res) {
    var renderingService = new RenderingService();
    return renderingService.render("test-harness-query-string", {
      stage: "dev", //todo: get from serverless
      queryString: JSON.stringify(event.query, null, 2),
      event: JSON.stringify(event, null, 2),
      context: JSON.stringify(context, null, 2)
    })
    .then((html) => { return context.done(null, html)});
  });

  return index.handle();
}
