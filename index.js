const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and PostgreSQL API'})
})

app.get('/user', db.getUsers);
app.get('/user/:id', db.getUserById);
app.post('/user', db.createUser);
app.put('/user/:id', db.updateUser);
app.delete('/user/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})