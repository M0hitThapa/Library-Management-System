const express = require("express");
const bodyParser = require("body-parser");

const books = [{
    bookName: "fuck you bitch",
    bookAuthor: "Johny sins",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
},
{
    bookName: "oh yeah",
    bookAuthor: "Miya Khalifa",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
}
]
const app = express();
app.set("view engine","ejs");

app.use( bodyParser.json());      
    app.use(bodyParser.urlencoded({    
         extended: true
}));


app.get('/',(req,res) => {
    res.render("home",{hello:books})
})

app.post('/', (req,res) =>{
    const inputBookName = req.body.bookName
    const inputBookAuthor = req.body.bookAuthor
   const inputBookPages = req.body.bookPages
   const inputBookPrice = req.body.bookPrice
   books.push({
    bookName: inputBookName,
    bookAuthor: inputBookAuthor,
    bookPages: inputBookPages,
    bookPrice: inputBookPrice,
    bookState: "Available"
   })
   res.render("home", {
    hello:books
   })

})
app.listen(3000);