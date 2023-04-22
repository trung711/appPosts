const express = require('express')
const connectDB = require('./config/db')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//nhap khau route
const posts = require('./routes/posts')

//khoi dong app
const app = express()

//Khoi dong Handlebars middlewware
app.engine('handlebars',engine())
app.set('view engine','handlebars')


//khoi dong bodyParser Middlewware
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())


//Khoi dong method override middeware
app.use(methodOverride('_method'))

//Khoi dong express middlewware
app.use(express.json())

//Ket noi co so du lieu
connectDB()

// Mot so routes co ban , co the dưa vào file riêng trong thu muc routes
app.get('/',(req,res) => res.render('index'))
app.get('/about',(req,res) => res.render('about'))

//Mang routes vao su dung
app.use('/posts',posts)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server khoi dong tại port ${PORT}`))
