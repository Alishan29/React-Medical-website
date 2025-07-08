import React, { useState } from 'react';

function EventFunctions() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }

    

    setResult(res);
  };

  return (
    <>
    <div className="calculatorbox">
      <h1>Arithmetic Operations in React</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>
      </div>
      <button onClick={calculate}>Calculate</button>

      {result !== null && (
        <h2 style={{ marginTop: '20px' }}>Result: {result}</h2>
      )}
      </div>
    </>
  );
}

export default EventFunctions;
