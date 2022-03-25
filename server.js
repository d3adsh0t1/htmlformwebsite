const http = require("http");
const fs = require("fs");

const myserver = http.createServer((request, response)=> {
    response.writeHead(200, { 'Content-type': 'text/html'});
    var myurl = request.url;
    if(myurl =="/about")
    {
        response.write("<h2>About Page</h2>");
    }
    else if(myurl =="/home")
    {
        //const content3 = fs.readFileSync(".htmlpages/image.html");
        response.write("Home Page");
    }
    else if(myurl =="/form")
    {
        const content = fs.readFileSync("./htmlpages/Registration.html");
        response.write(content)
    }
    else if(myurl =="/register")
    {
        response.write("Registration Completed. ");
        const content2 = fs.readFileSync("./htmlpages/home.html");
        response.write(content2)
    }
    else 
    {
        response.write("<h2>Server Worked</h2><p>"+ myurl +"</p>");
    }
    response.end();
})

myserver.listen(3000);

myserver.on("connection", (result)=> {
    console.log("Connection Established");
})

