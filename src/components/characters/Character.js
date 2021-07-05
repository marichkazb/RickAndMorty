import React from 'react'
import './CharacterStyles.css'

export default function CharacterCard(props) {
  console.log({
    chars: props.chars 

  });
  return ( 

   
    
    <div class="character-item">
     
    <img src={props.chars.image} style={{ position: 'absolute', zIndex: 3, width: '150px', height: '173px', objectFit: 'fill'}} alt="rick and morty" />
  
        <div className="description" >
          <div className="name">
          {props.chars.name}
          </div>
          <div className="status">
            Status:{props.chars.status}
          </div>

          <div className="loc">
          <a class='criteria'>Location:</a>
          <div className="location">
            {props.chars.location.name}
          </div>
          </div>
          
          <div className="loc">
          <a class='criteria'>Created:</a>
          <div className="episode">
           {props.chars.created}
          </div>
          </div>

        </div>
     </div>
           
         
  

  )
}

