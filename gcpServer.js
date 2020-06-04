'use strict';

const router = require('./routes/index');
const logger = require('morgan');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/public',express.static(path.join(__dirname, 'public')));

app.use(router);


// not correct path
app.use((req,res) => {
    res.statusCode =404;
    res.json({Message:'The resource you are access is not found'});
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



