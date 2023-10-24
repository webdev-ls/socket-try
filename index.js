import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
import { createServer } from "http";
import {Server} from 'socket.io';
const app = express();
const port = process.env.PORT || 5500;


// app.listen(port,()=>{
//     console.log("App is listening on port",port);
// });
app.use(json());
app.use(cors());

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
    },
});
  
io.on("connection", (socket) => {

    console.log("joined",socket.id);

});




httpServer.listen(port+1,()=>{
    console.log("Socket is listening on port",port+1);
});
