/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: InputForm.jsx
import React from "react";

const InputForm = ({
  gender,
  setGender,
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  handleCalculate,
}) => {
  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    if (newWeight === "" || parseFloat(newWeight) >= 0) {
      setWeight(newWeight);
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    if (newHeight === "" || parseFloat(newHeight) >= 0) {
      setHeight(newHeight);
    }
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    if (newAge === "" || parseFloat(newAge) >= 0) {
      setAge(newAge);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label className="mb-2">Gender</label>
        <form>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          <label className="ml-2">Male</label>

          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            className="ml-5"
            onChange={() => setGender("female")}
          />
          <label className="ml-2">Female</label>
        </form>
      </div>
      <div className="mb-3">
        <label className="mb-2">Weight</label>
        <input
          type="number"
          value={weight}
          onChange={handleWeightChange}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Weight in Kg"
        />
      </div>
      <div className="mb-3">
        <label className="mb-2">Height</label>
        <input
          type="number"
          value={height}
          onChange={handleHeightChange}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Height in Cm"
        />
      </div>
      <div className="mb-3">
        <label className="mb-2">Age</label>
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Age"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="h-10 w-28 rounded-2xl bg-sky-800 text-cyan-50"
      >
        Calculate BMI
      </button>
    </div>
  );
};

export default InputForm;
