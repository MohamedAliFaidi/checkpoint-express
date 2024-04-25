const express = require("express");

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');


const check = require("./middleware")




app.get('/', check, (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('home');
  });
  
  app.get('/services', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('services');
  });


  app.get('/contact', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('contact');
  });

app.listen(4444, () => {
  console.log("server is up on 4444");
});