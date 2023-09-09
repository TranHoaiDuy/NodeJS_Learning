// Require would make available the
// express package to be used in
// our code
const express = require("express");
path = require('path');

// Creates an express object
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {

// Using send function we send
// response to the client
// Here we are sending html
res.render("pages/index");
});

app.get("/login", (req, res) => {
    // console.log(stringify(req))
    res.render("pages/login");
})

app.post("/login", (req, res) => {
    const login = req.body.taikhoan;
    const password = req.body.matkhau;

    res.send('Tài khoản mật khẩu là: ' + login + ',' + password)
    console.log(login)
})


// It configures the system to listen
// to port 3000. Any number can be
// given instead of 3000, the only
// condition is that no other server
// should be running at that port
app.listen(3000, () => {

// Print in the console when the
// servers starts to listen on 3000
console.log("Listening to port 3000");
})
