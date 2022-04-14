const http = require('http')
const debug = require("debug")("node-angular");
const express = require('express');

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  };

var obj = {
    table: []
 };
obj.table.push({id: 1, square:2});
var json = JSON.stringify(obj);
const fs = require('fs');
fs.writeFile('coord.json', json, function(err) {
    if (err) throw err;
    console.log('complete');
} );

const server = http.createServer((req, res)=>{
    res.end('amk');
});

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
  };

port = normalizePort(process.env.PORT || "3000");
server.on("listening", onListening);
server.listen(port);


const app = express()


app.use((req, res, next) => {
    res.setHeader("Access-Controll-Allow-Orrigin", "*");
    res.setHeader("Access-Controll-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Controll-Allow-Methods",
    " GET, coord, PATCH, DELETE, OPTIONS");
    next();
})

app.post("/api/coord", (req, res, next) => {
    const coord = req.body;
    console.log(coord);
    res.status(201).json({
      message: 'coord added successfully'
    });
    next();
});
