const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.listen(PORT);
app.get('/', (req, res) => {
    res.send({ working: true })
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})