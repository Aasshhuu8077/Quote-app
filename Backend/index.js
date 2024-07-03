const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT =  8080;
const seedDB = require( './seed');
const cors = require('cors');
const quotesRoute = require('./Api/quotesRoute')
const userRoutes = require('../Backend/Api/userRoutes')













app.use(express.json());// to use json data
app.use(userRoutes);


app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.urlencoded({ extended: true })); // middleware for handling form submissions

app.use(quotesRoute);

mongoose.connect("mongodb://127.0.0.1:27017/Quotes").then(()=>{ 
    console.log("Connected To Database")
})
.catch((err)=>{
    console.log(err);
})

seedDB();
app.get('/hello' , (req,res)=>{
    res.status(200).json( {message : "Hello World!"} )
})

app.listen(PORT, () => {
    console.log(`Server is running on'${PORT}'`)
});