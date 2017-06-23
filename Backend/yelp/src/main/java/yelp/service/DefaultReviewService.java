package yelp.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import yelp.domain.Review;
import yelp.repository.ReviewRepository;

@Transactional(readOnly = true)
@Service
public class DefaultReviewService implements ReviewService {

	private final ReviewRepository reviewRepository;
	private static final Logger logger = LoggerFactory.getLogger(DefaultReviewService.class);

	@Autowired
	public DefaultReviewService(ReviewRepository reviewRepository) {

		this.reviewRepository = reviewRepository;
	}

	@Override
	public Review create(Review review) {
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getReviewListByUserId(Long userId) {
		logger.trace("Finding user by username [{}].", userId);
		return reviewRepository.findByUserId(userId); 
	}

	@Override
	public List<Review> getReviewListByRestaurantId(Long restaurantId) {
		logger.trace("Finding user by username [{}].", restaurantId);
		return reviewRepository.findByRestaurantId(restaurantId); 
	}

	@Override
	public void editReview(Review review) {
		reviewRepository.save(review);
	}

	@Override
	public void deleteReview(Long reviewId) {
		reviewRepository.delete(reviewId);

	}

}
