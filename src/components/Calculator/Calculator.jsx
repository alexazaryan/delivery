import { useState } from "react";
import "./Calculator.scss";

export default function Calculator({ onClose }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleNumChange = (e, num) => {
    if (num === 1) {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    let calculatedResult = 0;

    switch (operator) {
      case "+":
        calculatedResult = number1 + number2;
        break;
      case "-":
        calculatedResult = number1 - number2;
        break;
      case "*":
        calculatedResult = number1 * number2;
        break;
      case "/":
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = "Ошибка";
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator-overlay">
      <div className="calculator">
        <button className="close-btn" onClick={onClose}>
          Закрыть
        </button>
        <div className="calculator-content">
          <input
            type="number"
            value={num1}
            onChange={(e) => handleNumChange(e, 1)}
          />
          <select value={operator} onChange={handleOperatorChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => handleNumChange(e, 2)}
          />
          <button onClick={calculateResult}>=</button>
          <p>Результат: {result}</p>
        </div>
      </div>
    </div>
  );
}
