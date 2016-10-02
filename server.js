var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'Article-one' : { 

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

},
'Article-two' : {
title: 'Article Two | Sam Alphonse',
heading: 'Article Two',
date:'Septemeber 10, 2016',
content:`<p>
        This is the content for my Second Article.
        </p>`
},
'Article-three' : {
 title: 'Article Three | Sam Alphonse',
heading: 'Article Three',
date:'Septemeber 15, 2016',
content:`<p>
        This is the content for my Third Article.
        </p>`
},
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

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
   
});

app.get('/:articleName', function (req, res) {
    // article name = Article-one
    //articles[articleName] = content of Article-one
    var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/face2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'face2.jpg'));
});

var names = [];
app.get('/submit-name/:name', function (req, res) {
    // get the name from the request
    
    var name =req.params.name;
    
    names.push(name);
    // JSON: Java Script Object Notation
    res.send(JSON.strigify(names)); //TODO
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
