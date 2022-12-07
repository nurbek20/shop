import React from 'react';
import './Card.css'
import { Button, Card } from 'react-bootstrap';

const CardItem = (props) => {
  const { addCard, removeItem } = props
  return (
    <div className='card'>
      {
        addCard.map((elem, index) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img className='img_card' variant="top"  src={elem.thumbnail} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                  {elem.description}
                </Card.Text>
                <div className='price'>
                  <span>{elem.price} $</span>
                  <Button onClick={()=>removeItem(elem.id)} variant="primary">Удалить из Корзину</Button>
                </div>
              </Card.Body>
            </Card>
          )
        })
      }

    </div>
  )
}

export default CardItem


