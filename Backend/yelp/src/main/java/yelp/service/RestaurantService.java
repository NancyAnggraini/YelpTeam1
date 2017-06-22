package yelp.service;

import java.util.List;

import yelp.domain.Restaurant;

public interface RestaurantService {

	Restaurant findById(Long id);
	
	List <Restaurant> findAll();
	
	List <Restaurant> findRestaurantByName(String searchName);
}
