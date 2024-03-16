import { useState,useEffect } from 'react'

function Counter() {

const[count,setCount] =useState(0);
const [name,setName] = useState("")
useEffect(function myEffect(){
    console.log('my effect been called')
},[]);
const incrememnt=()=>{
setCount((c)=> c+1);
}

const handlechange=(e)=>{
    setName(e.target.value)
}
  return (

    <div>
<h1>count {count}</h1>
  <button onClick={incrememnt}>+1</button>
  <p>{name}</p>
  <input value={name} type='text' onChange={handlechange}/>
    </div>

  )
}

export default Counter