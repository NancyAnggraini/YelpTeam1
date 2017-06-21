package yelp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import yelp.domain.Restaurant;
import yelp.repository.RestaurantRepository;


@Transactional(readOnly = true)
@Service
public class DefaultRestaurantService implements RestaurantService {

	private final RestaurantRepository restaurantRepository;
	
	@Autowired
	public DefaultRestaurantService (RestaurantRepository restaurantRepository) {
		this.restaurantRepository = restaurantRepository;
	}
	
	@Override
	public List<Restaurant> findAll() {
		return this.restaurantRepository.findAll();
	}

	@Override
	public List<Restaurant> findRestaurantByName() {
		// TODO Auto-generated method stub
		return null;
	}

}
