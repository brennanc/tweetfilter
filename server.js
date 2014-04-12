
var express = require("express");
var app = express();
var http = require("http");

var server = http.createServer(app);

app.set('ipaddr', "127.0.0.1");
app.set("port", 8888);
app.use(express.static("public", __dirname + "/public"));
//app.use(express.bodyParser());
//
server.listen(app.get("port"), app.get('ipaddr'), function () {
	console.log("Server up and running on " + app.get("ipaddr") + ":" + app.get("port"));
});
