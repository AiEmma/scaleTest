const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const countries = require ('./countries')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())


app.get("/countries/all", (req, res) => {
   
   const getAll = countries.map(allContries)
   function allContries(item) {
    
       return [item.fronteiras.length, item.name]
   }
   
    res
   .status(200)
   .send(getAll.sort((a,b) => b[0]-a[0]))
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
   })