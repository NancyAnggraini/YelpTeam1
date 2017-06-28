export const fetchRestaurants = () => (dispatch, getState) => {
  fetch('http://localhost:8080/api/restaurants')
    .then( res => res.json())
    .then( restaurants => {
        dispatch(addRestaurants(restaurants));
    })
}

export const addRestaurants = (restaurants) => ({
  type: 'ADD_RESTAURANTS',
  restaurants
});

export const fetchRestaurant = (restaurantId) => (dispatch, getState) => {
  // console.log('in the fetch');
  fetch(`http://localhost:8080/api/restaurants/${restaurantId}`)
    .then( res => res.json())
    .then( restaurant => {
      // console.log(restaurant);
      // console.log(getState());
      dispatch(currentRestaurant(restaurant));
    })
}

export const currentRestaurant = (restaurant) => ({
  type: 'CURRENT_RESTAURANT',
  restaurant
})
