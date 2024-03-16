import { useState,useEffect } from 'react'


const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
function QuoteLoader() {
const[quote,setQuote] = useState({text:"",author:""});
const[isLoading,Setisloadingt] = useState(true)

useEffect(()=>{
    
    async function fetchQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
        Setisloadingt(false);
        
        }
    fetchQuote()},[]);



return (
    <div>
<p className='loader' style={{ opacity:isLoading ?1:0}} >Loading...</p>
        <h1>{quote.text}</h1>
        <h3>{quote.author}</h3>
        </div>
  )
}

export default QuoteLoader