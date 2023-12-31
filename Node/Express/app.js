const express = require("express")
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())
// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the templete engine as pug
app.set('views', path.join(__dirname, 'views')); // Set views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is best content ";
    const param = { 'title': 'PubG is the game ', "content": con };
    res.status(200).render('index.pug', param);
})

app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `name is ${name} having age ${age} and gender ${gender} living near ${address} . Tell more ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const con = "No tension ";
    const param = { 'message': 'Form  is submitted ', "content": con };
    res.status(200).render('index.pug', param);
})

// STARTING PORT
app.listen(port, () => {
    console.log(`stats at ${port}`)
})