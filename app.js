const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname)); //serve css from root of project
app.set('view engine', 'ejs');
//express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));


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

app.get('/', (req, res) => {

    res.render("index", { title: "Mini Messageboard", messages: messages })
});

//render new page first
app.get('/new', (req,res)=>{
    console.log(req.params)
    res.render('new')
})
//receive submitted data
app.post('/new', (req, res) => {
  const { user, text } = req.body; // Extract values from the form
  req.body.added = new Date();     // Add timestamp to the object
  messages.push(req.body);         // Store the updated object

  console.log(`Username: ${user}, Text: ${text}`);
  res.send(`Received: ${user}, ${text}. Back to <a href="/">Home</a>`);
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
