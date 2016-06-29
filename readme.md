index.lambda
============
Once upon a time there was index.php.

![index.lambda diagnostic page](https://raw.githubusercontent.com/ronaldwidha/index.lambda/master/other/img/demo-screenshot.png)
Live Demo: [Diagnostic Page] (https://lwrnabvd4f.execute-api.us-east-1.amazonaws.com/dev) *(up and running as of 06/28)*

Index.lambda is a bootstrapper and lightweight web framework for building server-side web application on AWS Lambda and AWS API Gateway. AWS API Gateway was primarily designed for JSON payload. However with the right config (and contortion), the stack work well as a serverless server side web app platform.

Features
--------

**Easy setup**
```JavaScript
import Index from "../core/index";
var index = new Index();

export default (event, context) => {

  index.set(event, context);

  // ...
}
```

**Dynamic routes**
Define paths through code (instead of defining them as endpoints in AWS API Gateway).

```JavaScript
export default (event, context) => {

  index.get("/", function(req, res) {
    //... handle request
  }

  index.get("/path-1", function(req, res) {
    //... handle request
  }

  //process the request
  return index.handle();
}
```

Paths can be 3 levels deep.

|          | API | Example |
|----------|------------------------------------------------|----------------------------------------------------|
| 1 level  | `event.params.level1 // contact-us`            | E.g. http://domain/contact-us                      |
| 2 levels | `event.params.level2 // ronaldwidha`           | E.g. http://domain/user/ronaldwidha                |
| 3 levels | `event.params.level3 // how-to-build-a-blog`   | E.g. http://domain/article/123/how-to-build-a-blog |


**Built in Mustache Template engine support**

```JavaScript
export default (event, context) => {
  //...

  var renderingService = new RenderingService();
  return renderingService.render("mustache-view", { ... })
  .then((html) => { return context.done(null, html)});
}
```

Or roll out your own template engine.

**Get any Query Strings**

```JavaScript
export default (event, context) => {
  event.query // {"query":"123"}

  // or

  index.req.query // {"query":"123"}
}
```

**Perform a 302 redirect**

```JavaScript
export default (event, context) => {
  //...
  return index.res.redirect(url);
}
```

**Return error/status codes**

By default, you'll have access to the following error/status codes: 301, 302, 400, 404, 500

```JavaScript
export default (event, context) => {
  return index.res.status(404).send("Sorry.");
}
```


Getting Started
---------------
To be added

```
npm install
sls dash deploy
```

Roadmap
-------
- Package core library as npm package
- Support for POST
- Support for Cookie
- Support for fav.ico

Known issues
------------
1. manual effort required to change the lambda config from node1.0 to node 4.3
