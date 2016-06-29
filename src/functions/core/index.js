import Response from "./responseService";

export default class index {
  set(event, context) {
    this.event = event;
    this.context = context;
    this.path = this.constructPath();
    this.res = new Response(this);
  }

  constructPath() {
    //todo: refactor using underscore

    var path = "/";

    if(this.event.params.level1 && this.event.params.level1 !== "") {
      path = path + this.event.params.level1;

      if(this.event.params.level2 && this.event.params.level2 !== "") {
        path = path + "/" + this.event.params.level2;

        if(this.event.params.level3 && this.event.params.level3 !== "") {
          path = path + "/" + this.event.params.level3;
        }
      }
    }

    return path;
  }
}
