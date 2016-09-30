var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    title: 'Article One'
content:
  
                    This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
                     This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
                    <hr>
                  
                    This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
                     This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
                     
                     <hr>
                 
                    This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
                     This is my webpage.   This is my webpage.   This is my webpage.   This is my webpage.
 

    
    
};
function createtemplate(data)
{
    var title=data.title;
    var content=data.content;
var htmltemplate=
    <html>
    <head>
        <title>Article one</title>
  
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>

                <h3>Article one</h3>
                <div>
                    sep 30,16
                </div>
                <div>
                   <p>
                   s{content}
                   </p>
                </div>
            
            
        </div>
        
        </div>
    </body>
</html>

}
retrn htmltemplate;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
