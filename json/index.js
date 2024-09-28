 const fs = require('fs');
 const bioData={
    name: "sneha",
    age : 21,
 };
 /*
 1. convert to Json
 2.add to another file
 3. read file
 4. convert back to js object 
 5. show on console
 */


 const jsonData = JSON.stringify(bioData);
 //fs.writeFile('json1.json', jsonData,(err)=>{
   //   console.log("done");
 //})
 fs.readFile("json1.json","utf-8",(err,data)=>{
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);


});
  
