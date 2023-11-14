import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className='icons'>
          <a to=''>
            <img src='/w.png'/>
          </a>

           <a href='https://www.linkedin.com/in/%D8%B3%D9%85%D9%8A%D8%A9-%D8%B9%D8%A7%D8%AF%D9%84-%D8%A7%D9%84%D8%AE%D8%B7%D9%8A%D8%A8-113a00205'>
           <img src='/l.png'/>
          </a>

          <a href='https://www.facebook.com/profile.php?id=100074438614802&mibextid=9R9pXO'>
          <img src='/3.png'/>
          </a>
        </div>
      </div>
    </>
  )
}


export default App;
