const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/view'))


app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})