import React from 'react';
import './Locations.css';

export default function LocationCard(props) {
  console.log({
    chars: props.chars
  });

  return(

    <div class='location-item'>

        <div className='name'>
          {props.chars.name}
        </div>

        <div className='type'>
          Type: {props.chars.type}
        </div>

        <div className='dimension'>
          Dimension: {props.chars.dimension}
        </div>


    </div>

  )
}