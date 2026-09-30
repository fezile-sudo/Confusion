
import * as ActionTypes from './ActionTypes';


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});


export const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const dishesFailed = error => ({
    type: ActionTypes.DISHES_FAILED,
    payload: error
});


export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});


export const addLeaders = leaders => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


export const leadersFailed = error => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: error
});


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId,
        rating,
        author,
        comment
    }
});
