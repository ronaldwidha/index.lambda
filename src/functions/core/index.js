import Response from "./responseService";
import Request from "./requestService";

export default class index {
  set(event, context) {
    this.event = event;
    this.context = context;
    this.req = new Request(this);
    this.res = new Response(this);
  }
}
