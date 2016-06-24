index.lambda
============
Once upon a time there was index.php.

![index.lambda diagnostic page](https://raw.githubusercontent.com/ronaldwidha/index.lambda/master/other/img/demo-screenshot.png)
Live Demo: [Diagnostic Page] (https://30or0k1i79.execute-api.us-east-1.amazonaws.com/dev/?thiscomesfrom=twitter) *(up and running as of 06/24)*

Index.lambda is a bootstrapper (and lightweight web framework) to build server-side web application on AWS Lambda and AWS API Gateway. AWS API Gateway was primarily designed for JSON payload. However, there is nothing stopping us to configure it to handle other payload such as text/Html.

Features
--------

**Support for HTTP GET request with Query Strings**

```
export default (event, context) => {
  event.query // {"query":"123"}
}
```

Getting Started
---------------

```
npm install
sls dash deploy
```

Roadmap
-------
- Support for POST
- Support for Cookie
- Defining routes in code
- Support for fav.ico
