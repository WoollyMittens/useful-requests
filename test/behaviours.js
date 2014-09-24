var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulRequests = require('../src/js/useful-requests.js'),
    path = 'http://local.woollymittens.nl/useful-requests/';

describe('Expected behaviours of "useful-requests"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should report the progress of an AJAX request', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.request.send({
                    url : './inc/xml/test.xml',
                    post : 'name=value&foo=bar',
                    onProgress : function (reply) { done(reply); },
                    onFailure : function (reply) {},
                    onSuccess : function (reply) {}
                });


            }, function (err, result) {

                assert(
                    result.value.readyState !== 4
                );

            })
            .call(done);
    });

    it('should report the failure of an AJAX request', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.request.send({
                    url : './inc/xml/doesNotExist.xml',
                    post : 'name=value&foo=bar',
                    onProgress : function (reply) {},
                    onFailure : function (reply) { done(reply); },
                    onSuccess : function (reply) {}
                });


            }, function (err, result) {

                assert(
                    result.value.status === 404
                );

            })
            .call(done);
    });

    it('should report the success of an AJAX request', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.request.send({
                    url : './inc/xml/test.xml',
                    post : 'name=value&foo=bar',
                    onProgress : function (reply) {},
                    onFailure : function (reply) {},
                    onSuccess : function (reply) { done(reply); }
                });


            }, function (err, result) {

                assert(
                    result.value.status === 200
                );

            })
            .call(done);
    });

    it('should add a randomised suffix to a URL', function(done){

        var A = usefulRequests.randomise('doesNotExist.xml?foo=bar&lorem=ipsum');

        setTimeout(function () {

            var B = usefulRequests.randomise('doesNotExist.xml?foo=bar&lorem=ipsum');
            assert(A !== B);
            done();

        }, 10);

    });

    it('should turn a string back into a DOM object', function(done){

        client
            .url(path)
            .execute(function () {

                var html = useful.request.deserialize('<div>Hello <b>World</b></div>');
                return html.documentElement.getElementsByTagName('b').length;

            }, function (err, result) {

                assert(
                    result.value === 1
                );

            })
            .call(done);

    });

    it('should turn a string back into an object', function(done){

        var obj = usefulRequests.decode('{"Hello":"World"}');
        assert(obj.Hello === 'World');
        done();

    });

    after(function(done) {
        client.end(done);
    });
});
