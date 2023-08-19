const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8750
const connectionString = "mongodb+srv://leticiafrancielle:teste123@appdatabase.sjsbjbi.mongodb.net/"


mongoose.connect(connectionString, {
    dbName: "DevsSupermarket"
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Listening on http://localhost:${port}`)
    app.listen()
}).catch((error) => {
    console.log(error)
})