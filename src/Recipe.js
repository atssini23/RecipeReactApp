import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
