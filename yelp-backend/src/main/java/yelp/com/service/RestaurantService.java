package yelp.com.service;

import java.util.List;

import yelp.com.domain.Restaurant;

public interface RestaurantService {

	List <Restaurant> findAllRestaurants();
	List <Restaurant> findRestaurantByName();
}
