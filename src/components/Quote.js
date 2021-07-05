
import React from 'react';


const Quote = ({ quote }) => {
    return (
        <p>
        {quote.text} <br />
 
         <span>- {quote.autor}</span> <br />
 
         <h6> Alumno  Muhana Guillermo</h6>
 
       </p>
    )
}

export default Quote
