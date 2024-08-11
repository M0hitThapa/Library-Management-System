const express = require("express");
const bodyParser = require("body-parser");

const books = [{
    bookName: "The Long Run",
    bookAuthor: "Stacey D’Erasmo",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
},
{
    bookName: "Fifteen Cents on the Dollar",
    bookAuthor: "Louise StoryEbony Reed",
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

app.post('/issue', (req,res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Issued";
        }
    })
    res.render("home", {
        hello : books
    })
})
app.post('/return', (req,res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Available";
        }
    })
    res.render("home", {
        hello : books
    })
})
app.post('/delete', (req, res) => {
    var requestedBookName = req.body.bookName;
    var j = 0;
    
    books.forEach(book => {
        j = j + 1;
        if (book.bookName == requestedBookName) {
            books.splice((j - 1), 1)
        }
    })
    
    res.render("home", {
        hello: books
    })
 })

app.listen(3000);