const newRouter = require('./search')

function route(app) {
    app.use('/search', newRouter)

    app.get('/', (req, res) => {
        // res.send('Hello World!')
        res.render('home')
      })
      
    // app.get('/search', (req, res) => {
    //     res.render('search')
    //   })
      
    app.post('/search', (req, res) => {
        res.render('search')
        console.log(req.body.q)
        // res.render('search')
      })
}

module.exports = route