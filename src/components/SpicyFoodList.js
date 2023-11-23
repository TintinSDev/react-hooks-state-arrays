import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
  }

  function handleLiClick(food, id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    } setFoods(newFoodArray);
  };
  
  


  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  const [filterBy, setFilterBy] = useState("All");
  function handleFilterChange(event) {
    setFilterBy(event.target.value);

  
    return (
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    );
  }
  function handleAddFood() {
    const newFood = ""
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  
    return (
      <div>
        <button onClick={handleAddFood}>Add New Food</button>
        <ul>{foodList}</ul>
      </div>
    );
  } 
}

export default SpicyFoodList;
