const express = require('express');

const app = express();

app.listen(6969);
app.use(express.static('css'));

app.get('/', (req, res)=>{
    res.sendFile('./home.html', {root: __dirname});
})