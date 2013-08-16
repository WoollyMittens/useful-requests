# useful.requests.js: AJAX Library

A library of useful functions to ease working with AJAX and JSON.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=requests">tests</a>.

## How to use the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful.requests.js"></script>
```

## Functions

```javascript
useful.request.send({
	url : 'http://localhost/',
	post : 'name=value&foo=bar',
	onProgress : function (reply) {return reply},
	onFailure : function (reply) {return reply},
	onSuccess : function (reply) {return reply}
});
```

Sends an AJAX request and runs the event handlers when appropriate.

**url : {string}** - The URL of an XML or JSON web-service. This can contain the GET request.
**post : {string}** - A POST request in the form of name value pairs separated by &. If not empty the AJAX request will be a POST instead of GET.
**onProgress : {function}** - A function that gets called after every progress update to the request.
**onFailure : {function}** - A function that gets called when the request fails.
**onSuccess : {function}** - A function that gets called after the request completes successfully. Only here will the *reply* object contain the *response*.

The *reply* object is passed to all these functions.

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

```javascript
object = useful.request.deserialize(text);
```

Turns HTML or XML in the form of text into a DOM object.

**object : {DOM object}** - An XML or HTML DOM object.
**text : {HTML} | {XML}** - A valid HTML or XML document in text form.

```javascript
object = useful.request.decode(text);
```

Turns JSON into a Javascript object, using whatever method is available from safe to unsafe.

**object : {object}** - A Javascript object containing name-value pairs.
**text : {JSON}** - A valid Javascript object in JSON form.

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
