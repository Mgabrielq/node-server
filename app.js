const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello, Gabriel Queiroz!!!</h1> <a href="/fabio">Go to Fabio</a>')
})

app.get('/fabio', (req, res) => {
	const x = 1231221 + 4142;
  res.send('<h1>Hello Fabio!: ' + x + '</h1> <a href="/">Go to Gabriel</a>')
})


app.get('/info', (req, res) => {
  res.sendFile('/home/devops/dev/myapp/gabriel.json')
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
