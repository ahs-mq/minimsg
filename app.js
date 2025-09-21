const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

    res.render("index", { title: "Mini Messageboard", messages: messages })
});

app.get('/new', (req,res)=>{
    res.render('new')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
