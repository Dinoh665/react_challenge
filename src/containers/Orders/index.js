import Packet from '../../assets/packetBurguer.png'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import axios from 'axios'
import Trash from '../../assets/trash.svg'

import {
  Container,
  Image,
  H1,
  Pedido,
  Button
} from './styles'




const Orders = () => {

  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/order");

      setOrders(newOrders)
    }

    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)

    const newOrders = orders.filter(order => order.id !== orderId)

    setOrders(newOrders)
  }

  function goBackPage() {
    navigate('/')
  }

  return (

    <Container>

      <Image src={Packet} />
      <H1>Pedidos</H1>

      <ul>
        {orders.map(order => (
          <Pedido key={order.id}>
            <div>
              <p>{order.order}</p>
            </div>
            <button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt='lata-de-lixo' />
            </button>
            <div className='nome'>
              <p>{order.name}</p>
            </div>
          </Pedido>
        ))}
      </ul>

      <Button onClick={goBackPage}>Voltar</Button>

    </Container>

  )

}

export default Orders