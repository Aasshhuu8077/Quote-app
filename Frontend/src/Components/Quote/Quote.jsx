import React, { useEffect } from 'react'
import styles from './Quote.module.css'
import {useNavigate} from 'react-router-dom';
import axios  from 'axios';

function Quote(props) {
  let navigate = useNavigate();

   async function deletequote(id){
     await axios.delete(`http://localhost:8080/deletequotes/${id}`)
    
    console.log("Quote deleted successfully");
    navigate('/');
  }
 
  function showquotehandler(id){
  navigate(`/quotes/${id}`);
  }

  return (
    <div>
      <ul className={styles.quotes} >
        <span>
        <p>{props.text}</p>
       <h3> {props.author}</h3> 
        </span>
      <button onClick={()=>deletequote(props.id)}>Delete</button>
       <button onClick={()=>showquotehandler(props.id)} >View full </button>
      </ul>
      
    </div>
  )
}

export default Quote