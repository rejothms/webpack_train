/* import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer';



const middlewares = [
  applyMiddleware(thunk)
]

const enhancer = compose(...middlewares);


const store = initialState => {
    return createStore(reducer, initialState);
  };
  
export default store;
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const middlewares = [
  applyMiddleware(thunk)
]


const enhancer = compose(...middlewares);


const store = initialState => {
  return createStore(reducer, initialState, enhancer);
};

export  default store;