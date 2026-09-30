"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComment = exports.leadersFailed = exports.addLeaders = exports.leadersLoading = exports.dishesFailed = exports.addDishes = exports.dishesLoading = void 0;

var ActionTypes = _interopRequireWildcard(require("./ActionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dishesLoading = function dishesLoading() {
  return {
    type: ActionTypes.DISHES_LOADING
  };
};

exports.dishesLoading = dishesLoading;

var addDishes = function addDishes(dishes) {
  return {
    type: ActionTypes.ADD_DISHES,
    payload: dishes
  };
};

exports.addDishes = addDishes;

var dishesFailed = function dishesFailed(error) {
  return {
    type: ActionTypes.DISHES_FAILED,
    payload: error
  };
};

exports.dishesFailed = dishesFailed;

var leadersLoading = function leadersLoading() {
  return {
    type: ActionTypes.LEADERS_LOADING
  };
};

exports.leadersLoading = leadersLoading;

var addLeaders = function addLeaders(leaders) {
  return {
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
  };
};

exports.addLeaders = addLeaders;

var leadersFailed = function leadersFailed(error) {
  return {
    type: ActionTypes.LEADERS_FAILED,
    payload: error
  };
};

exports.leadersFailed = leadersFailed;

var addComment = function addComment(dishId, rating, author, comment) {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
    }
  };
};

exports.addComment = addComment;
//# sourceMappingURL=ActionCreators.dev.js.map
