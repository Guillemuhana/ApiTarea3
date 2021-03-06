
import React, { useState, useEffect} from 'react';
import Quote from './components/Quote';


const initialQuote = {

  text:'Cargando...',
  

}


function App() {

  const [quote, setQuote ] = useState(initialQuote);

  const updateQuote = async () => {

    const url = "https://www.breakingbadapi.com/api/quote/random";

    const res = await fetch(url);

    const [newQuote] = await res.json();

    

    setQuote({

      text: newQuote.quote,
      autor: newQuote.autor,
    })


  }


  useEffect(() => {

  updateQuote();


  }, []);


  return (
    <div className="app">

      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo" />

      <button onClick={() => updateQuote()}>Nueva carga</button>
      
      <Quote quote={quote} />

    
    </div>
   
  );
}

export default App;
