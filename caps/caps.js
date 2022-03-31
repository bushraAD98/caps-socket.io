'use strict';
const port = 4444;

const io = require('socket.io')(port);


io.on('connection', (socket) => {
    console.log('connected', socket.id);

    socket.on('pickup', (storeName) => {
        let obj = {
            event: "pickup",
            time: new Date().toString(),
            payload: storeName
        };


        console.log("EVENT", obj);
        io.emit("pickup", storeName)

    })
    socket.on('in-transit', (storeName) => {
        let obj = {
            event: "in-transit",
            time: new Date().toString(),
            payload: storeName
        };
        console.log("EVENT", obj);
    })
    socket.on('delivered', (storeName) => {
        let obj = {
            event: "delivered",
            time: new Date().toString(),
            payload: storeName
        };

        console.log("EVENT", obj);
        io.emit("delivered", storeName)
    })
})

