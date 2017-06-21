package yelp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import yelp.domain.Restaurant;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
	
	//Return a restaurant by id
	Restaurant findById(Long id);
	
	//Return a list of restaurants by name
	List <Restaurant> findByNameContaining (String searchName);

}
