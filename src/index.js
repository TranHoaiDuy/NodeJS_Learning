// Require would make available the
// express package to be used in
// our code
const express = require("express");
path = require('path');
const cors = require('cors');

// Creates an express object
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const pageRouter = require('./router/pageRouter')
const authRouter = require('./router/authRouter')


app.use('/', cors({origin : '*'}), pageRouter )
app.use('/', cors({origin : '*'}), authRouter )

app.listen(3000, () => {
    console.log("Listening to port 3000");
})
