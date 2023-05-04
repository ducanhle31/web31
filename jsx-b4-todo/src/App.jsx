import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Todo.css'


 import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formState, setFormState] = useState({
    bill: 0,
    percent: 15,
    numberOfPersons: 1
  });

  const handleChange = (e) => {
    e.preventDefault();

    let key = e.target.name;
    let value = Number(e.target.value);

    if (key === "percent" && Number(value) < 10) {
      return;
    }

    setFormState((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const { bill, percent, numberOfPersons } = formState;

  const tip = (bill * percent) / 100;
  const totalAmount = bill + tip;
  const tipPerPerson = (tip / numberOfPersons).toFixed(2);
  const amountPerPerson = (totalAmount / numberOfPersons).toFixed(2);

  console.log(tip, totalAmount, tipPerPerson, amountPerPerson);

  return (
    <div className="App">
      <div className="background"></div>

      <form action="" className="calculator-form">
        <div className="form-field">
          <label htmlFor="bill" className="form-label">
            Bill
          </label>
          <input
            type="number"
            name="bill"
            id="bill"
            value={formState.bill}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="tip" className="form-label">
            Tip
          </label>
        </div>

        <input
          type="range"
          name="percent"
          id="percent"
          step={5}
          min={0}
          max={100}
          value={formState.percent}
          onChange={handleChange}
        />

        <input
          type="range"
          name="numberOfPersons"
          id="numberOfPersons"
          step={1}
          min={0}
          max={20}
          value={formState.numberOfPersons}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
