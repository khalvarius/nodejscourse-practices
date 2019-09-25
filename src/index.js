const http = require("http");
let options = {
  hostname: "https://www.npmjs.com/search?q=base64",
  path: "/",
  port: "8080",
  method: "GET"
};
let req = http.request(options, function(response) {
  let str = "";
  response.on("data", function(chunk) {
    str += chunk;
  });
  response.on("end", function() {
    console.log(str);
  });
});
req.end();
