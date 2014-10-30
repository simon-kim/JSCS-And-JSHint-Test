var http = require('http');
var url = require('url');

var parseTime = function(time){
  return {
    hour:  + time.getHours(),
    minute:  + time.getMinutes(),
    second:  + time.getSeconds()
  };
};

var unixTime = function(time) {
    return { unixtime : time.getTime() };
};

var server = http.createServer(function(request, response) {
  var parseUrl = url.parse(request.url, true);
  var path = parseUrl.pathname;
  var time = new Date(parseUrl.query.iso);
  var output;

  if(request.method == 'GET') {
    if(path === "/api/parsetime") {
      output = parseTime(time, response);
    } else if(path === "/api/unixtime") {
      output = unixTime(time, response);
    }

    if (output) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(output));
    } else {
      response.writeHead(404);
      response.end();
    }
  }
});

server.listen(process.argv[2]);
