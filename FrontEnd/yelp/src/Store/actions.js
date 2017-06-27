export const fetchRestaurants = () => (dispatch, getState) => {
  fetch('http://localhost:8080/api/restaurants')
    .then( res => res.json())
    .then( restaurants => {
      const newRestaurants = [ ...restaurants];
      newRestaurants.forEach( restaurant => {
        dispatch(addRestaurant(restaurant));
       })
    })
}

export const addRestaurant = (restaurant) => ({
  type: 'ADD_RESTAURANT',
  restaurant
});
