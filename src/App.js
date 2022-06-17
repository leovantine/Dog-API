import React, { useState } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import background4 from "./images/background4.jpg"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const MainDiv = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background4});
background-size: 100%;
background-position: 1%;
background-repeat: no-repeat;
`
const Info = styled.div`
height: 9vh;
display: flex;
justify-content: center;
width: 69vw;
align-items: center;
`
const Title = styled.h1`
font-family: 'ZCOOL XiaoWei', serif;
font-weight: bolder;
color: 	#A52A2A;
`
const Btn = styled.button`
margin-left: 1vw;
width: 9vw;
height: 6vh;
border: none;
background-color: #CD853F;
color: #800000;
font-family: 'ZCOOL XiaoWei', serif;
font-size: 16px;
font-weight: bolder;
border-radius: 10px;
&:hover{
  cursor: pointer;
  background: rgba(0,0,0,0);
  color: #A52A2A;
  box-shadow: inset 0 0 0 3px;
}
`
const DivApi = styled.div`
border: solid #904E1C;
margin: vh;
margin-left: 12vw;
width: 45vw;
height: 90vh;
`
const Img = styled.img`
width: 100%;
height: 89.4vh;
`

export default function App() {

  const [dog, setDog] = useState([])

  function dogApi() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      console.log(response)
      setDog(response.data.message)
    })
  }
  return (
    <MainDiv>
      <GlobalStyle />

      <Info>
      <Title>FAÇA SEU DIA MAIS FELIZ</Title>
      <Btn onClick={()=>{dogApi()}}>CLICANDO AQUI</Btn>
      </Info>

      <DivApi>
      <Img src={dog} alt=""></Img>
      </DivApi>
    </MainDiv>
  )
}