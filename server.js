var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config = {
  user: 'vidhishah98' ,
  database: 'vidhishah98' ,
  host:'db.imad.hasura-app.io',
    port:'5432',
    password: 	'db-vidhishah98-78047' // error due to DB_PASSWORD
};



var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title: 'Article-one | Vidhi shah',
    heading: 'Article-one',
    date:'Sep 5,2016',
    content:
            <p>
                    This is the content of the first article.This is the content of the first article.This is the content of the first article. This is the content of the first article. This is the content of the first article.
            </p>
};
'article-two':{
    title: 'Article-two | Vidhi shah',
    heading: 'Article-two',
    date:'Sep 6,2016',
    content:
            <p>
                    This is the content of the second article.This is the content of the second article.This is the content of the second article. This is the content of the second article. This is the second of the first article.
            </p>
};
'article-three':{
    title: 'Article-three | Vidhi shah',
    heading: 'Article-three',
    date:'Sep 7,2016',
    content:
            <p>
                    This is the content of the third article.
            </p>
};
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db', function (req, res) {
 //make a select request 
 //return a request with the results
 pool.query("SELECT * FROM test",function(err,result){
     if(err){
      res.status(500).send(err,toString());
    } else {
     res.send(JSON.string(fy(result.rows)));
 }
 });
});

var counter=0;
app.get('/counter', function (req, res) {
counter=counter+1;
  res.send(counter.toString()); 
});

var names=[];
app.get('/submit-name',function(req,res){   //URL: /submit-name?name=vidhi
   //get the name from the request
   var name=res.query.name;
   
   names.push(name);
   //JSON: JAVASCRIPT OBJECT NOTATION
   res.send(JSON.stringify(names));
});

app.get('/article-one', function (req, res) {
res.send(createTemplate(articleOne));
    
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
