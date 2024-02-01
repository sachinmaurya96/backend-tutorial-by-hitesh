import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
const [jokes,setJokes] = useState([])

useEffect(()=>{
  axios.get("/api/quote")
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
   <>
   <h1>Dummy quote app</h1>
   <p>quote: {jokes.length}</p>
   {
    jokes.map((quote,index)=>(
      <div key={quote.id}>
        <h2>{quote.quote}</h2>
        <p>{quote.author}</p>
      </div>
    ))
   }
   </>
  )
}

export default App
