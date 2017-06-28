const restaurants = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESTAURANTS':
      const newState = [...action.restaurants];
      return newState;
    case 'CURRENT_RESTAURANT': //update
      const newSelectedRestaurant = [...state];
      newSelectedRestaurant.push(action.restaurant);
      // console.log("array: ", newSelectedRestaurant);
      return newSelectedRestaurant;
    default:
      return state;
  }
}

export default restaurants;
