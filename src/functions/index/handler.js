export default (event, context) => {
  // must return a promise, a JSON.stringify compatible data, null or nothing.

  // return `Query String: ${event['queryString']} <br /><br /> <h3>diagnostic:</h3><br /> Event:${JSON.stringify(event)} <br />Context ${JSON.stringify(context)}`;
  return `<html><head><title>Serverless page</title></head><body><p></p><p>Query String: ${JSON.stringify(event.query)}</p><br /><br /> <h3>diagnostic:</h3><br /> Event:${JSON.stringify(event)} <br /> <br />Context ${JSON.stringify(context)}</body></html>`;

}
