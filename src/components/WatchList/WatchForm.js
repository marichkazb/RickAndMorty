import React, {useState, useEffect, useRef } from 'react'
import './Watch.css'

function WatchForm(props) {
   const[input, setInput] = useState(props.edit ? props.edit.value : '');

   const inputRef = useRef(null) 

      useEffect(() => {
         inputRef.current.focus()
      })

   const handleChange = e => {
      setInput(e.target.value);
   }


   const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         text: input
   });

   setInput('');
};


    return (
      <form className='watch-form' onSubmit={handleSubmit}>
         {props.edit ? (
         <>
         <input type='text' placeholder='Update series' value={input} name='text' className='watch-input edit'
         onChange={handleChange}
         ref={inputRef}
         />
         <button className='watch-button edit'>SAVE</button>
         </>) : 
         (
         <>
         <input type='text' placeholder='Add series' value={input} name='text' className='watch-input'
         onChange={handleChange}
         ref={inputRef}
         />
         <button className='watch-button'>ADD</button>
         </>)
         }
         
      </form>
         
     
   )
}

export default WatchForm
