import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Data from './Data'

const MenuList = () => {

  const [foodItems, setFoodItems] = useState([]);
  const callbackDataFromData = (dataFromData) => {
    setFoodItems(dataFromData);
  }

  const handleClickFavorite = (indexItem) => {

    // state
    let copyFoodItems = [...foodItems];
    
    // Manipulation
    copyFoodItems[indexItem].isFavorite = true;

    // Affichage
    setFoodItems(copyFoodItems);
  }

  return (
    <div className='MenuList'>
      <Data callbackDataFromData={callbackDataFromData} />
      {foodItems.map((foodItem, index) => (
        <MenuItem foodItem={foodItem} onClick={() => handleClickFavorite(index)}/>
      ))}
    </div>
  )
}

export default MenuList