# requests.js: AJAX Library

A library of useful functions to ease working with AJAX and JSON.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-requests">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/requests.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/requests.js'
], function(requests) {
	...
});
```

Or import into an MVC framework.

```js
var requests = require('js/requests.js');
```

## How to control the script

### send

```javascript
requests.send({
	url : 'http://localhost/',
	post : 'name=value&foo=bar',
	contentType : 'text/xml',
	timeout : 4000,
	onTimeout : function (reply) { return reply; },
	onProgress : function (reply) { return reply; },
	onFailure : function (reply) { return reply; },
	onSuccess : function (reply) { return reply; }
});
```

Sends an AJAX request and runs the event handlers when appropriate.

**url : {string}** - The URL of an XML or JSON web-service. This can contain the GET request.

**post : {string}** - A POST request in the form of name value pairs separated by &. If not empty the AJAX request will be a POST instead of GET.

**contentType : {string}** - Optional content type. Default is "application/x-www-form-urlencoded".

**timeout : {integer}** - Optional number of milliseconds to wait before giving up.

**onTimeout : {function}** - Optional function to run when the optional timeout is exceeded.

**onProgress : {function}** - A function that gets called after every progress update to the request.

**onFailure : {function}** - A function that gets called when the request fails.

**onSuccess : {function}** - A function that gets called after the request completes successfully. Only here will the *reply* object contain the *response*.


### all

```javascript
requests.send({
	urls : ['http://localhost/1', 'http://localhost/2', 'http://localhost/3'],
	post : 'name=value&foo=bar',
	contentType : 'text/xml',
	timeout : 4000,
	onTimeout : function (reply) { return reply; },
	onProgress : function (reply) { return reply; },
	onFailure : function (reply) { return reply; },
	onSuccess : function (reply) { return reply; }
});
```

Sends an AJAX request and runs the event handlers when appropriate.

**urls : {array}** - A collection of requests to collate into a single response. An array of responses will be returned.

**contentType

The *reply* object is passed to all these functions.

### Format of the reply object

```javascript
reply = {
	readyState : integer,
	response : XMLDOMObject | string,
	responseText : string,
	responseXML : XMLDOMObject,
	status : integer,
	statusText : string
}
```

**readyState : {integer}** - A number from 0 to 4 as a measure of how complete the request it.

**response : {XMLDOMObject} || {string}** - The response in the form of an XML object when available, or string.

**responseText : {string}** - The response in the form of a string.

**responseXML : {XMLDOMObject}** - The response in the form of an XML object.

**status : {integer}** - The status of the request in the form of a number eg. 404.

**statusText : {string}** - The status of the request in the form of a string.

### deserialize

```javascript
var object = requests.deserialize(text);
```

Turns HTML or XML in the form of text into a DOM object.

**object : {DOM object}** - An XML or HTML DOM object.

**text : {HTML} | {XML}** - A valid HTML or XML document in text form.

### decode

```javascript
var object = requests.decode(text);
```

Turns JSON into a Javascript object, using whatever method is available from safe to unsafe.

**object : {object}** - A Javascript object containing name-value pairs.

**text : {JSON}** - A valid Javascript object in JSON form.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
