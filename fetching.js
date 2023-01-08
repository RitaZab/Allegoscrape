const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const fastCsv = require('fast-csv');
const fs = require("fs")
const csv = require("csv-stringify")
const port=3000
const ObjectsToCsv = require('objects-to-csv');

const uri = 'mongodb+srv://allegroscraper:Allegro10@allegroscrap.d5ei0v4.mongodb.net/?retryWrites=true&w=majority' 
let dbConnection
const connectToDB = (callback) => {
    MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            console.log("Connected to DB")
            return callback()
            
        })
        .catch(err => {
            console.log(err)
            return callback(err)
    })
}
const getDB = () => dbConnection 
let db
connectToDB((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log("app listening on 3000")
            
        })
        db = getDB()
            let items=[]
    db.collection('testowies')
        .find()//cursor
        .forEach(element => items.push(element))       
        .then(() => {
            
            let items1 = JSON.parse(JSON.stringify(items))
            console.log(items1)
            csv.stringify(items1, {header:true, columns: { "_id": "id","name":"name","price":"price","url":"url"}},(e,o) => fs.writeFileSync("headphones.csv",o))

 
            
        })
        .catch(() => {
        res.status(500).json({error:"Fetch impossible"})
    })
        
    }
})


