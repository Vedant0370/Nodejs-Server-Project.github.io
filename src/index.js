

const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express();


const port = process.env.PORT || 8000;

// path 
const partialPath = path.join(__dirname , '../views/partials')


app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)
                                                           




app.get('/', (req, res) => {
   
    // res.send('hello from server')

    res.render('index')

})

app.get('/about', (req,res) => {      

    res.render('about')
})

app.get('/services', (req,res) =>{

    res.render('services')
})

app.get('/contact', (req,res) => {

    res.render('contact')   
})


app.listen(port, () => {

    console.log(`the server is running on http://127.0.0.1:${port}`)
})