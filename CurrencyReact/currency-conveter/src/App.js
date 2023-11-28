import React, { useState } from 'react';
import './App.css';
function App() {
  const [amount, setAmount] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    const convertedAmount = parseFloat(amount) * parseFloat(conversionRate);
    setResult(isNaN(convertedAmount) ? 'Invalid input' : convertedAmount.toFixed(2));
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount in Dollars:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Conversion Rate:
          <input type="number" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} />
        </label>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;
