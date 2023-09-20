import React from 'react';
import {Link} from 'react-router-dom';
import "./Card.css"
const Card = (props) => {
  return(
    <>
    <Link to='/details' state= {props.tags}>
    <div className='card'>
      <img alt = 'items' src = {`${props.image}`} style = {{width:200 , height:200}} />
      <div>
        <h2>{props.name}</h2>
         Where it goes? 
      </div>
    </div>
    </Link>
    </>
  );
}

export default Card;
