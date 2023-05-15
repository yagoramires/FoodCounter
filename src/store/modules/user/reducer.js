import { ADD_COMMENT } from './actionTypes';

const initialState = { name: 'Yago', comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;

    default:
      return state;
  }
};

export default userReducer;
