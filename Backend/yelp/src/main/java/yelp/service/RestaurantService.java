package yelp.service;

import java.util.List;

import yelp.domain.Restaurant;

public interface RestaurantService {

	List <Restaurant> findAll();
	
	List <Restaurant> findRestaurantByName();
}
