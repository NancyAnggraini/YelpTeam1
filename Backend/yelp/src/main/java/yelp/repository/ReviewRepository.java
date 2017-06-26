package yelp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import yelp.domain.Restaurant;
import yelp.domain.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

	// Select * from review where id = :id
	Review findById(Long id);

	// Select * from review where userid = :id
	List<Review> findByUserId(Long id);

	// Return a restaurant by id
	List<Review> findByRestaurantId(Long id);

}
