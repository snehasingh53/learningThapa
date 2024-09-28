const fs= require("fs");

//fs.mkdir("thapa",(err)=>{
   // console.log("folder created");
//});

//fs.writeFile("./thapa/bio.txt","my name is sneha singh  ",(err)=>{
  //  console.log("folder created");
//})

//fs.appendFile("./thapa/bio.txt"," please like and share my videos",(err)=>{
  //  console.log("folder appended");
//});


//fs.readFile("./thapa/bio.txt","utf-8",(err,data)=>{
  //  console.log(data);

//});   
 

//fs.rename("./thapa/bio.txt","./thapa/myBio.txt",(err=>{
  //  console.log("rename done ");
//}))

//fs.unlink("./thapa/myBio.txt",
  //  (err)=>{
    // console.log("unlink done ");
    //});

    fs.rmdir("./thapa",(err)=>{
        console.log("folder deleted");
    });