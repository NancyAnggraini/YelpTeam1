export const fetchRestaurants = () => (dispatch, getState) => {
  fetch('http://localhost:8080/api/restaurants')
    .then( res => res.json())
    .then( restaurants => {
      const newRestaurants = [ ...restaurants];
        dispatch(addRestaurant(newRestaurants));
       })
}

export const addRestaurant = (restaurants) => ({
  type: 'ADD_RESTAURANTS',
  restaurants
});
