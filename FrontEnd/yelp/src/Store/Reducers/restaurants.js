const restaurants = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESTAURANTS':
      const newState = [...action.restaurants];
      return newState;
    default:
      return state;
  }
}

export default restaurants;
