export default class requestService {
  constructor(index) {
    this.index = index;
    this.method = this.index.event.method;
    this.query = this.index.event.query;
    this.path = this.constructPath();
    this.fullPath = this.constructFullPath();
    this.pathRoot = `/${this.index.event.pathPrefix}`;
  }

  value() {
    return {
      method: this.method,
      query: this.query,
      path: this.path,
      fullPath: this.fullPath,
      pathRoot: this.pathRoot
    }
  }

  constructFullPath() {
    if (this.index.event.pathPrefix !== "") {
      return `/${this.index.event.pathPrefix}${this.path}`;
    }
    else {
      return `${this.path}`;
    }
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
