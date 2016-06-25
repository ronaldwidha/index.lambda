import RenderingService from "../core/renderingService";

export default class index {
  static handle(event, context) {
    var renderingService = new RenderingService();

    return renderingService.render("diagnostic", {
      queryString: JSON.stringify(event.query, null, 2),
      level1: JSON.stringify(event.params.level1),
      level2: JSON.stringify(event.params.level2),
      level3: JSON.stringify(event.params.level3),
      event: JSON.stringify(event, null, 2),
      context: JSON.stringify(context, null, 2)
    });
  }
}
