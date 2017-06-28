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
  fetch(`http://localhost:8080/api/restaurants/${restaurantId}`)
    .then( res => res.json())
    .then( restaurant => {
      dispatch(currentRestaurant(restaurant));
    })
}

export const currentRestaurant = (restaurant) => ({
  type: 'CURRENT_RESTAURANT',
  restaurant
})

export const fetchSearchedRestaurants = (searchedBy) => (dispatch,getState) => {
  fetch(`http://localhost:8080/api/restaurants/search?query=${searchedBy}`)
    .then(res => res.json())
    .then(restaurants => {
      dispatch(addRestaurants(restaurants));
       })
}
