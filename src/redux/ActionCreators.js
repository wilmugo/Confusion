import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    author: author,
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
