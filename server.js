const express = require('express');
const app = express()
const port = 3000

app.use(express.json()); // middleware

app.use((req, res, next) => { //logs every requests
console.log(`${req.method} ${req.url} ${new Date()}`);
next(); //pass to next handler (required!)
});

app.use((req, res, next) => { //logs every requests
console.log('Hello, I am here');
next(); //pass to next handler (required!)
});

app.post('/echo', (req, res) => {
    console.log(req.body);
    res.json({echoed: req.body});
})
app.post('/echo', (req, res) => {
  res.send('Hello from express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});