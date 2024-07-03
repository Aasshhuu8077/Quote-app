const mongoose = require('mongoose')
const Quotes = require('./Models/Quote');


let dummyQuotes =[
    {
        author:"Ashutosh Singh",
        text:"Hey how are you?"
    },
    {
        author:"Rahul",
        text:"Syntax over semantics"
    },
    {
        author:"Jetha Lal",
        text:"Gada Electronic"
    },
    {
        author:"Tarak Mehta",
        text:"Tarak mehta ka ulta Chashma"
    }
]

async function  seedDB(){
    Quotes.insertMany(dummyQuotes);
    console.log("DB seeded Successfully");

}


module.exports = seedDB;