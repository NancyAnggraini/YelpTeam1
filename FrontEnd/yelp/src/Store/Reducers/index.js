import { combineReducers } from 'redux';
import currentUser from './currentUser';
import restaurants from './restaurants';
import currentRestaurant from './currentRestaurant';


export default combineReducers ({
  currentUser,
  restaurants,
  currentRestaurant
})
