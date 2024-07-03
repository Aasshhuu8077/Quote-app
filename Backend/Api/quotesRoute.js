const router = require('express').Router();
const Quotes = require('../Models/Quote')




// Route to see the all quotes

router.get('/allquotes' , async(req,res)=>{
    try{
        let allquotes = await Quotes.find({});
        res.status(200).json(allquotes);   // send the data back to client side 

    }
    catch(e){
   res.status(400).json({msg:"Some error occured"})
    }
})

// Route to create the quote
router.post("/addquote",async (req,res)=>{
   let {author,text} = req.body;
   await Quotes.create({author,text});
   res.status(201).json({msg:'The quote has been added successfully!'})
})
 
router.get('/quotes/:id'  , async(req,res)=>{
    let {id}  = req.params;
    const quote = await Quotes.findById(id)
    res.status(200).json(quote);

})

router.delete('/deletequotes/:id' , async (req,res)=>{
    
        try{
        let {id} = req.params;
        
        await Quotes.findByIdAndDelete(id);
           res.status(200);
    }
    catch(err){
        console.log(err);
    }
    
   
})

module.exports=router;