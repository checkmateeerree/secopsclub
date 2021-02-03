const express = require('express')
const cors = require('cors')
const router = require('./routes/authenticationRoutes')
const mongoose = require('mongoose')
require('dotenv').config()

try {
    const connection = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    console.log("Connected!")
}
catch (error){
    console.log(error)
}

const app = express()
const PORT = process.env.PORT || 7777

app.use(express.json())
app.use(cors());

app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})