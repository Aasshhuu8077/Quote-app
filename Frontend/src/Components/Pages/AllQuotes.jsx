
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';
import styles from './AllQuotes.module.css'

function AllQuotes() {
 let [quotes , setquotes] = useState([]);
  useEffect(()=>{
   getquotes();
  },[])
 async function getquotes(){
  let res =  await axios.get('http://localhost:8080/allquotes');
  console.log(res.data);
  setquotes(res.data);
  }
  return (
    <div className={styles.container}>
      <h1>All Quotes</h1>
      <ul>
       
       {quotes.map((quote , index)=>{
        return <Quote
        key={index}
       text={quote.text}
       author ={quote.author}
       id={quote._id}
        />
       })}
      </ul>
    </div>
  )
}

export default AllQuotes