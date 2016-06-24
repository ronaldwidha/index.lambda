import RenderingService from "../core/renderingService";

export default (event, context) => {
  var renderingService = new RenderingService();

  return renderingService.render("diagnostic", {
    queryString: JSON.stringify(event.query, null, 2),
    event: JSON.stringify(event, null, 2),
    context: JSON.stringify(context, null, 2)
  });
}
