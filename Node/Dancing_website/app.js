const express = require("express")
const path = require("path");
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
    const params={}
   res.status(200).render('index.pug', params);
})




// STARTING PORT
app.listen(port, () => {
    console.log(`stats at ${port}`)
})