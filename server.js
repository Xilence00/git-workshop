const express = require('express')
const app = express()

app.get('/' , (req,res) => {
    res.send('Hello git');
});

app.post('/login', (req, res) => res.send('Login'));

app.post('/users',(req,res) => res.send('User List'));

app.listen(3000, () => console.log('run'))