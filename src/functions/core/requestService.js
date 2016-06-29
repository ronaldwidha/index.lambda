export default class requestService {
  constructor(index) {
    this.index = index;
    this.method = this.index.method;
    this.query = this.index.event.query;
    this.url = this.constructPath();
  }

  constructPath() {
    //todo: refactor using underscore

    var path = "/";

    if(this.index.event.params.level1 && this.index.event.params.level1 !== "") {
      path = path + this.index.event.params.level1;

      if(this.index.event.params.level2 && this.index.event.params.level2 !== "") {
        path = path + "/" + this.index.event.params.level2;

        if(this.index.event.params.level3 && this.index.event.params.level3 !== "") {
          path = path + "/" + this.index.event.params.level3;
        }
      }
    }

    return path;
  }
}
