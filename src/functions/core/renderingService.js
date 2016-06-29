import Promise from "bluebird";
var mustache = require("mustache");
var fs = Promise.promisifyAll(require('fs'));

export default class renderingService {
  render(viewname, data) {

    /// todo: pick a rendering engine
    return fs.readFileAsync(`./view/${viewname}.mustache`)
      .then((contents) => {
        var html = mustache.to_html( contents.toString(), data);
        return html;
      })
      .catch((e) => {
        console.error(e.stack);
      });
  }
}
