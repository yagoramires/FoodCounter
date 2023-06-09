/* eslint-disable react/prop-types */
import { createContext, useEffect } from 'react';
import { foods } from '../../database';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const QuantityContext = createContext({});

export const QuantityProvider = ({ children }) => {
  const [foodList, setFoodList] = useState(foods);

  const navigate = useNavigate();

  const removePiece = (foodId) => {
    const selectedFoodFilter = foodList.filter((food) => foodId === food.id);
    const selectedFood = selectedFoodFilter[0];
    selectedFood.quantity = selectedFood.quantity
      ? selectedFood.quantity - 1
      : 0;

    const oldList = [...foodList];
    oldList[foodId] = selectedFood;

    setFoodList(oldList);
    const localStorageCurrentList = JSON.stringify(oldList);
    localStorage.setItem('currentList', localStorageCurrentList);
  };
  const addPiece = (foodId) => {
    const selectedFoodFilter = foodList.filter((food) => foodId === food.id);
    const selectedFood = selectedFoodFilter[0];
    selectedFood.quantity = selectedFood.quantity
      ? selectedFood.quantity + 1
      : 1;

    const oldList = [...foodList];
    oldList[foodId] = selectedFood;

    setFoodList(oldList);
    const localStorageCurrentList = JSON.stringify(oldList);
    localStorage.setItem('currentList', localStorageCurrentList);
  };

  const clearCounter = () => {
    localStorage.removeItem('currentList');
    localStorage.removeItem('userPrice');

    navigate('/');
    // window.location.reload();
  };

  useEffect(() => {
    const currentList = localStorage.getItem('currentList');
    if (currentList) {
      const foodListCurrent = JSON.parse(currentList);
      setFoodList(foodListCurrent);
    } else {
      setFoodList(foods);
    }
  }, []);

  return (
    <QuantityContext.Provider
      value={{ foodList, addPiece, removePiece, clearCounter }}
    >
      {children}
    </QuantityContext.Provider>
  );
};
