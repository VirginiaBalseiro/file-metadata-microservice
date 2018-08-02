'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// require and use "multer"...
var multer = require('multer'); 
var upload = multer({dest: 'uploads/'});
var app = express();
//app.use(multer);
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

//app.use(express.static(__dirname + 'views/'));

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next){
        return res.json({
    'name' : req.file.originalname,
    'type' : req.file.mimetype,
    'size' : req.file.size
   })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening on PORT ' + process.env.PORT);
});
