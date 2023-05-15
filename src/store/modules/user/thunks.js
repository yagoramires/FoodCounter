import { addComment } from './actions';

export const addCommentThunk = (comment) => {
  console.log('comment: ' + comment);
  return (dispatch, getState) => {
    const { user } = getState();
    console.log(user);

    const updatedUser = { ...user, comments: [...user.comments, comment] };

    console.log(updatedUser);

    dispatch(addComment(updatedUser));
  };
};
