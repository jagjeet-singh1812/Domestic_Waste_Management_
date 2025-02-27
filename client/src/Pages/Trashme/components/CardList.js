import React from 'react'
import Card from '../components/Card'
// import {Link} from 'react-router-dom';
import "./Cardlist.css"
const CardList = ({items}) => {
  const cardComponent = items.map((user, index) => {
    return <Card key={index} 
    id={items[index].id} 
    name={items[index].name} 
    tags={items[index].tag} 
    image={items[index].image} />
  })
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;
