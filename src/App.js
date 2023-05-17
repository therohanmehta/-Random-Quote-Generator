import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'In the middle of every difficulty lies opportunity. - Albert Einstein',
    'The best revenge is massive success. - Frank Sinatra',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    'The secret to getting ahead is getting started. - Mark Twain',
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
  ];
  const [count, setCount] = useState(0);
  function changeText() {
    setCount(count + 1);
    if (count === 9) {
      setCount(0);
    }
  }
  return (
    <div>
      <h1> {quotes[count]} </h1>
    
      <button onClick={changeText}>changing greet</button>
    </div>
  );
}
