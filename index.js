const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.use(cors({
    origin: 'https://sohel-portfolio.netlify.app'
}));


app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/data', jsonParser, (req, res) => {
    const {copy} = req.body;
    console.log(typeof copy)
    
    fs.appendFile('./emails.txt', copy + "\n", (err) => {
        if(err){
            console.error(err);
        }
    })
    
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});