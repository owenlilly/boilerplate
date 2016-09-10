const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'pug');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('home/index');
});

const port = 3000;
app.listen(port, function(){
	console.log(`Running on ${port}`);
});
