import React from 'react'
import './Home.css'
import { Card, Button } from 'react-bootstrap';

const Home = (props) => {
  const { data } = props
  return (
    <div className='card'>
      {
        data.map((elem, index) => {
          return (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img className='img_card' variant="top" src={elem.thumbnail} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                  {elem.description}
                </Card.Text>
                <div className='price'>
                  <span>{elem.price} $</span>
                  <Button variant="primary">Добавить в Корзину</Button>
                </div>
              </Card.Body>
            </Card>
          )
        })
      }

    </div>
  )
}

export default Home
