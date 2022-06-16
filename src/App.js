import React, {useState} from 'react'
import axios from 'axios'

export default function App(){

  const [dog, setDog] = useState([])

  function dogApi(){
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) =>{
      console.log(response)
      setDog(response.data.message)
    })
  }
  return(
    <>
    <button onClick={()=>{dogApi()}}>CLICK HERE</button>
    <img src={dog} alt="Fotos de doguinhos"></img>
    </>
  )
}