import Response from "./responseService";

export default class index {
  set(event, context) {
    this.event = event;
    this.context = context;
    this.path = constructPath();
    this.res = new Response(this.event, this.context);
  }

  constructPath() {
    //todo: refactor using underscore

    var path = "/";

    if(this.event.params.level1 && this.event.params.level1 !== "") {
      path = path + "/" + this.event.params.level1;

      if(this.event.params.level2 && this.event.params.level2 !== "") {
        path = path + "/" + this.event.params.level2;

        if(this.event.params.level3 && this.event.params.level3 !== "") {
          path = path + "/" + this.event.params.level3;
        }
      }
    }

    return path;
  }

  handle() {

    // example how to do redirect
    if (this.event.params.level1 && this.event.params.level1 == "redirect") {
      var url = this.event.query.url;//get from query string
      return context.done(this.redirect(url), null);
    }

    // example how to render a view
    else {

    }
  }

  redirect(url) {
    var apiGWErrorParam = new Error("statusCode:302");
    apiGWErrorParam.name = 'http://www.amazon.com';
    return apiGWErrorParam;
  }
}
