package yelp.service;

import java.util.List;

import yelp.domain.Review;

public interface ReviewService {

	
	Review findReviewById(Long id);
	
	Review create(Review review);

	List<Review> getReviewListByUserId(Long userId);

	List<Review> getReviewListByRestaurantId(Long restaurantId);

	void editReview(Review review);

	void deleteReview(Long reviewId);

}
