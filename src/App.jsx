import { useState } from "react";
import { Header, Button } from "./components";

function App() {
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  const [amount, setAmount] = useState(1000);
  const [months, setMonths] = useState(6);

  function handleChange(e) {
    setAmount(+e.target.value);
  }

  function handleClickDec() {
    const value = amount - STEP;
    setAmount(value);

    if (value < MIN) {
      alert(" Invalid Amount (._.)");
      return;
    }
  }

  function handleClickInc() {
    const value = amount + STEP;
    setAmount(value);
    if (value > MAX) {
      alert(" Invalid Amount (._.)");
      return;
    }
  }

  function changeMonths(e) {
    setMonths(e.target.value);
  }
  return (
    <div className="my-10 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDec} />
        <Button operador="+" fn={handleClickInc} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        value={amount}
        step={STEP}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {amount}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choose a<span className="text-indigo-600"> Term </span> to pay.
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value="months"
        onChange={changeMonths}
      >
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Payment <span className="text-lime-500">Summary </span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          <span className="text-indigo-600">{months}</span> Months
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          <span className="text-indigo-600">total</span> Total to pay
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          <span className="text-indigo-600">pay </span>Monthly
        </p>
      </div>
    </div>
  );
}

export default App;
