const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const port = 8000


app.get('/', (req, res) => {
  res.send('Hello World!' + req.params.name)
})

app.post('/user', (req, ress) => {
  res.json({ 'Hai': req.query.name })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//10.1.9.165

app.get('/resturant', (req, res) => {
  let restaurant = [{
    name: 'Kichi',
    price: 300,
    address: 'ha noi'
  },
  {
    name: 'lau',
    price: 400,
    address: 'hanoi1'
  }]
  res.json(restaurant)
})