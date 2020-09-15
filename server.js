const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// require files stuff
const basicinfoRoute = require('./routes/basicinfo');
const playground = require('./routes/codePlayground');
// app.use stuff
app.use(express.static('Website'));
app.use(cors());
app.use(express.json({limit:'1mb'}));

// using routes
app.use('/',basicinfoRoute);
app.use('/',playground);

app.listen(port);






