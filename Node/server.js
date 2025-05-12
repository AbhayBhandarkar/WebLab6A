/* TO CREATE AND START A SERVER 

var my_http = require("http");
my_http.createServer(function(request,response){
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("Hello MSRIT");
  response.end();
}).listen(5000);
console.log("Server Running on 5000"); 

*/

//Check if prime or not requesting input from user. 
//We connect form.html to server.js and write the logic to check 
//whether prime or not taking in an array of numbers as input through form

const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // Serve HTML form
    fs.readFile("form.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsed = querystring.parse(body);
      const inputArray = parsed.numbers.split(',').map(num => parseInt(num.trim()));
      const result = inputArray.map(n => ({
        number: n,
        isPrime: isPrime(n)
      }));

      // Create a response message
      let responseText = "<h2>Prime Check Results:</h2><ul>";
      result.forEach(item => {
        responseText += `<li>${item.number} is ${item.isPrime ? 'a' : 'not a'} prime number</li>`;
      });
      responseText += "</ul><a href='/'>Back</a>";

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(responseText);
    });
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
