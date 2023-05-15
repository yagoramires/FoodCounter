/* eslint-disable no-case-declarations */
import { COUNTER_ADD, COUNTER_SUB } from './actionTypes';

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      const add = action.payload;
      return state + add;

    case COUNTER_SUB:
      const sub = action.payload;
      return state - sub;

    default:
      return state;
  }
};

export default reducerCounter;
