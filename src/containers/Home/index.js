import Logo from '../../assets/logoBurguer.png'
import axios from 'axios'
import React from 'react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Image,
  H1,
  InputLabel,
  Input,
  Button
} from './styles'



const App = () => {

  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const navigate = useNavigate()

  async function addNewOrder() {
    
try {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      
    order: inputOrder.current.value, 
    name: inputName.current.value, 
  })
  
  console.log(newOrder)

    setOrders([...orders, newOrder ]);

  } catch (error) {
    console.log("error adding new user", error)
  }

    navigate('/orders')
  }

  return (

    <Container>

      <Image src={Logo} />
      <H1>Faça seu pedido!</H1>

      <InputLabel> Seu pedido aqui:</InputLabel>
      <Input placeholder="1 Coca Cola, 1 X-burguer" ref={inputOrder} />

      <InputLabel>Nome do Cliente:</InputLabel>
      <Input placeholder="Seu Nome" ref={inputName}/>

      <Button  onClick={addNewOrder}>Novo Pedido</Button>

    </Container>

  )

}

export default App