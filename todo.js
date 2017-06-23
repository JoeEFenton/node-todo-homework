const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require ('body-parser');
const data = require('./public/todo.js');
const app = express();
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended: true}));

const list = [
  {todo: "wash car", yetTodo: true} , {todo: "Things", yetTodo: false}
];

const data  = {todos: list};

app.get('/', function (req, res) {
  res.render('index', data);
})

app.post("/complete", function(req, res) {
  console.log(req.body)
  completedList.push('')
  res.redirect('/')

app.post("/", function (req, res) {
  todos.push({req.body.todo, yetTodo: true});
  res.redirect('/');
})

app.listen(3000, () => console.log("ready!"));
