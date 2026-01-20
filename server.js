const express = require('express')
const app = express()

app.get('/' , (req,res) => {
    res.send('Hello git');
});

app.get('/login', (req, res) => res.send('User List'));


app.listen(3000, () => console.log('run'))