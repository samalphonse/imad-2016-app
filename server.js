var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = { 

title: 'Article One | Sam Alphonse',
heading: 'Article One',
date:'Septemeber 5, 2016',
content:`<p>
        This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article.
    </p>
    <p>
        This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article.
    </p>
    <p>
        This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article. This is the content for my First Article.
    </p>`

};


function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
    <html>
    
        <head>
            <title>
                ${title}
            </title>
           <link href="/ui/style.css" rel="stylesheet" />
           
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                   ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    
    
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/article-three', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/face2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'face2.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
