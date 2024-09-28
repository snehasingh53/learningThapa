const fs= require("fs");
var http = require("http");

const server=http.createServer((req,res)=>{

   //console.log(req.url);
   if(req.url=='/'){
    res.end("hello from the other side ");
  }else if(req.url=="/about"){
    res.end("hello from About side ");
  }else if(req.url=="/contat"){
    res.end("hello from ContactUs side ");
  }
   // res.writeHead(404,{"Content-type":"text/html"});
    //es.end("<h1>404 error page, page does not exist<h1>")
  else if(req.url=="/userapi"){
    fs.readFile(`./userapi.json`,"utf-8",
        (err,data)=>{

            console.log(data);
    });
    res.end("hello from the user api side ")
  }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});
