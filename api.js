require("dotenv"). config(); 
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express()
app.use(express.json()); 

// middleware to log requests
app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);
next();

});
//GET
app.get('/', (req, res) => res.send('My Week 2 API!'));

//POST
app.post('/user', (req, res) => {
    const {name, email} = req.body;
   
   //error handling
    if (!name || !email) return res.status(400).json({error: 'Missing data'});
    
    console.log (req.body);

    res.status(201).json({message: `Hello, ${name}`})
});
// GET/user/:id
app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: `User ${req.params.id}'s profile`});
});

app.listen(PORT, () => console.log (`API live on port ${PORT}`));
