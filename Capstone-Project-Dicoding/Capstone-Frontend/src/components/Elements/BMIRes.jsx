/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const BMIResult = ({ bmi }) => (
  <div className="items-center text-center">
    <h2>Your BMI is:</h2>
    <br />
    <h3 className="text-5xl">{bmi}</h3>
    {bmi && (
      <h3>
        {bmi < 18.5
          ? "Underweight"
          : bmi < 25
          ? "Normal weight"
          : bmi < 30
          ? "Overweight"
          : "Obesity"}
      </h3>
    )}
  </div>
);

export default BMIResult;
