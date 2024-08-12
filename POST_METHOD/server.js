const express = require('express');
const app = express();
//require body-parser for this method
var bodyParser = require('body-parser');

//create application/x-www-form0urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res){
    res.sendFile(__dirname + "/" + "index.html");
    
})
    app.post('/process_post', urlencodedParser, function (req, res){
    
    //Prepare output in JSON format
    response = { 
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };

    console.log(response);
    res.send(JSON.stringify(response));
    });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
