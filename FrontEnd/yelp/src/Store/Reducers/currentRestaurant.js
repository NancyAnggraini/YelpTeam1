const currentRestaurant = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_RESTAURANT':
      const newState = {...action.restaurant};
      return newState;
    default:
      return state;
  }
}

export default currentRestaurant;
