//built-in module

// example 1- Registering for the event to be fired only one time using once
 const EventEmitter= require('events');

 const event = new EventEmitter(); //event is the object



 //event.on("saymyname",()=>{
 //   console.log("your name is sneha");
 //});

 //event.emit("saymyname");

 // example 2 - create an event emitter instance and register a couple of callbacks

 //event.on("saymyname",()=>{
   // console.log("your name is singh");
 //});
 //event.on("saymyname",()=>{
   // console.log("your name is bisen");
 //}); 
 // event.emit("saymyname");

  // example 3 - registering for the event with callback parameters
   event.on("checkPage",(sc,msg)=>{
     console.log(`status code is ${sc} and the pae is ${msg}`);
        
   })
  
  event.emit("checkPage",200, "ok");
