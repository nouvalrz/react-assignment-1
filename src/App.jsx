import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Nouval");
  const [counter, setCounter] = useState(0);
  const [buttonUp, setButtonUp] = useState(1);
  const [buttonDown, setButtonDown] = useState(5);

  const [inputs, setInputs] = useState({
    number1: 0,
    number2: 0,
  });
  const [result, setResult] = useState(0);

  const handleInputsChange = (event, property) => {
    if (isNaN(event.target.value)) {
      return;
    }

    setInputs({
      ...inputs,
      [property]: parseInt(event.target.value),
    });
  };

  const multiplication = () => {
    setResult(inputs.number1 * inputs.number2);
  };

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleButtonUpClick = () => {
    setButtonUp((prev) => prev + 1);
  };

  const handleButtonDownClick = () => {
    if (buttonDown > 0) {
      setButtonDown((prev) => prev - 1);
    }
  };

  return (
    <>
      <section id="greeting">
        <h1>Hello {name}</h1>
        <p>Who do you want to greet?</p>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={handleInput}
          style={{ textAlign: "center" }}
        />
        <br />
        <br />
        <button onClick={() => setName("Nouval")}>Reset Name</button>
      </section>
      <br />
      <br />
      <section id="counter">
        <p>Diklik {counter}</p>
        <button onClick={decrement}>(-) Kurang</button>
        <button onClick={increment}>(+) Tambah</button>
      </section>
      <br />
      <br />
      <section id="challenge">
        <button onClick={handleButtonUpClick}>Diklik {buttonUp}</button>
        <button onClick={handleButtonDownClick}>Diklik {buttonDown}</button>
      </section>
      <br />
      <br />
      <section id="multiplication">
        <input
          type="number"
          onChange={(event) => handleInputsChange(event, "number1")}
        />
        <input
          type="number"
          onChange={(event) => handleInputsChange(event, "number2")}
        />
        <button onClick={multiplication}>Hitung Perkalian</button>
        <p>Result : {result}</p>
      </section>
    </>
  );
}

export default App;
