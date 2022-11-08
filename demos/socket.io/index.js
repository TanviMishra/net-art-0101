//IMPORT LIBRARIES
// const express = require("express"); //older syntax
// add "type": "module" to package.json for ES6 syntax
import express from "express"; //ES6 syntax
import http from "http"; //ES6 syntax
import { Server } from "socket.io"; //ES6 syntax

//SOCKET.I0+ SERVER CONNECTION
//set up the express app
const app = express(); //express app used in app variable
const httpServer = http.createServer(app);
const io = new Server(httpServer); // the actual socket.io object

io.on("connection", function (socket) {
  // socket = the newly created user connection
  console.log("new friend connected");
  //triggered whenever someone loads onto your website
  socket.on("move-mouse", function (mouseData) {
    // console.log(mouseData);
    socket.broadcast.emit("update-mouse-pos", mouseData);
  });
});

//HOSTING
//start hosting a web server
const port = 4000; //any 4 digit number
//what is a port: simplified explanation is that it is a server created inside of your computer
httpServer.listen(port, function () {
  console.log("I'm in the port now " + port);
});

// host front-end CSS/HTML/js
app.use(express.static("public")); //routing -> aka when someone connects to your server without a specific route go to the public folder

console.log("hello from a node inside a mushroom inside a space");
