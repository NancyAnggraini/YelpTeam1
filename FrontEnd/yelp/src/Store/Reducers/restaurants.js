const restaurants = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newState = { ...state};
      newState[action.restaurant.id] = action.restaurant;
      return newState;
    default:
      return state;
  }
}

export default restaurants;
