index.lambda
============

Index.lambda is a bootstrapper (and lightweight web framework) to build server-side web application on AWS Lambda and AWS API Gateway. AWS API Gateway was primarily designed for JSON payload. However, there is nothing stopping us to configure it to handle other payload such as text/Html.

Features
--------

**Support for Query Strings**

```
event.query // {"query":"123"}
```



Roadmap
-------
- Defining route in code
