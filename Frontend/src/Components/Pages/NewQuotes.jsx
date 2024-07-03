import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function NewQuotes() {
  let usernameinpref = useRef();
  let quoteinpref = useRef();
 let navigate =  useNavigate();

async function addquotehandler(e){
  e.preventDefault();
  const author = usernameinpref.current.value;
  const text = quoteinpref.current.value;
 try{
  let res = await axios.post("http://localhost:8080/addquote" , {author : author , text : text});
  console.log(res);
  navigate('/');
 }
 catch{
  console.log("Error occured");
 }

}

  return (
    <form onSubmit={addquotehandler} className={styles['new-quote']}>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text"id="author" ref={usernameinpref} placeholder='Authors name'/>
      </div>
      <div>
        <label htmlFor="quote">Quote:</label>
       <textarea name="" id="quote" cols={15} rows={4} ref={quoteinpref} placeholder='Write your Quote here..'></textarea>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default NewQuotes;