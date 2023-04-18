//requiring the main file which consists of all the routes of the application
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectToMongo = require("./db");
const socket = require("socket.io");
//connecting to the database
connectToMongo();
const port = process.env.PORT || 3001;

function runFuncContinuous() {
  console.log("continuous running script!");
}

setInterval(runFuncContinuous, 1000 * 60);

//listening to the server
const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//initialized the socket
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

//list of online users
let onlineusers = new Map();

//creating socket connection
io.on("connection", (socket) => {
  console.log("new connection : ", socket.id);
  socket.on("add-user", (userId) => {
    onlineusers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    // To find receiver users socket
    const findSocketUser = onlineusers.get(data.to);
    if (findSocketUser) {
      //emitting the message to a particular client
      socket.to(findSocketUser).emit("msg-receive", data.message);
    }
  });
});
