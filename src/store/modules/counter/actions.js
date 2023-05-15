import { COUNTER_ADD, COUNTER_SUB } from './actionTypes';

export const addCounter = () => ({
  type: COUNTER_ADD,
  payload: 1,
});

export const subCounter = () => ({
  type: COUNTER_SUB,
  payload: 1,
});
