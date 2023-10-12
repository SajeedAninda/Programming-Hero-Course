let express = require("express");
let cors = require("cors");
let app = express();
let port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com" },
    { id: 2, name: "Bobita", email: "bobi@gmail.com" },
    { id: 3, name: "Arpona", email: "arpa@gmail.com" }
]


app.get("/", (req, res) => {
    res.send("User Management Server Running");
})
app.get("/users", (req, res) => {
    res.send(users);
})
app.post("/users", (req, res) => {
    console.log("Hitting Post");
    let newUsers = req.body;
    newUsers.id = users.length + 1;
    users.push(newUsers);
    res.send(newUsers);
})
app.listen(port);