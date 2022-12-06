import React from 'react';
import './Card.css'
import {Button, Card} from 'react-bootstrap';

const CardItem = (props) => {
 
  return (
    <div className='card'>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='img_card' variant="top" />
              <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
                <div className='price'>
                  <span>price $</span>
                  <Button  variant="primary">Удалить из Корзину</Button>
                </div>
              </Card.Body>
            </Card>
          
    </div>
  )
}

export default CardItem


