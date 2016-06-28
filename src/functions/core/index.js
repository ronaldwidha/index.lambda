import RenderingService from "../core/renderingService";

export default class index {
  static handle(event, context) {
    
    // example how to do redirect
    if (event.params.level1 && event.params.level1 == "redirect") {
      var url = event.query.url;//get from query string
      return context.done(this.redirect(url), null);
    }

    // example how to render a view
    else {
      var renderingService = new RenderingService();
      return renderingService.render("diagnostic", {
        queryString: JSON.stringify(event.query, null, 2),
        level1: JSON.stringify(event.params.level1),
        level2: JSON.stringify(event.params.level2),
        level3: JSON.stringify(event.params.level3),
        event: JSON.stringify(event, null, 2),
        context: JSON.stringify(context, null, 2)
      })
      .then((html) => { return context.done(null, html)});
    }
  }

  static redirect(url) {
    var apiGWErrorParam = new Error("statusCode:302");
    apiGWErrorParam.name = 'http://www.amazon.com';
    return apiGWErrorParam;
  }
}
