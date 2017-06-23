package yelp.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import yelp.AbstractYelpIntegrationTests;
import yelp.domain.Restaurant;
import yelp.domain.Review;
import yelp.domain.User;
import yelp.repository.ReviewRepository;

public class ReviewServiceTest extends AbstractYelpIntegrationTests {

	@Autowired
	ReviewService service;

	@Autowired
	ReviewRepository repository;

	@Test
	public void findReviewByIdTest() {
		assertThat(service.findReviewById(10L).getRestaurant().getName()).isEqualTo("testRestaurantName2");
	}

	@Test
	public void getReviewListByUserIdTest() {
		List<Review> reviewList = new ArrayList<Review>();
		reviewList = service.getReviewListByUserId(1L);
		assertThat(reviewList.size()).isEqualTo(2);
		assertThat(reviewList.get(0).getUser().getFirstName()).isEqualTo("testFirstName");
		assertThat(reviewList.get(0).getRestaurant().getName()).isEqualTo("testRestaurantName2");
		assertThat(reviewList.get(1).getId()).isEqualTo(10);
	}

	@Test
	public void getReviewListByRestaurantIdTest() {
		List<Review> reviewList = new ArrayList<Review>();
		reviewList = service.getReviewListByRestaurantId(2L);
		assertThat(reviewList.size()).isEqualTo(2);
		assertThat(reviewList.get(0).getRestaurant().getName()).isEqualTo("testRestaurantName2");
	}

	@Test
	public void editReviewTest() {
		Review review = service.findReviewById(10L);
		assertThat(review.getContent()).isEqualTo("irgendwas text10..");
		review.setContent("new content text..");
		service.editReview(review);
		assertThat(review.getContent()).isNotEqualTo("irgendwas text10..");
		assertThat(review.getContent()).isEqualTo("new content text..");
	}

	@Test
	public void deleteReviewTest() {
		assertThat(repository.count()).isEqualTo(3);
		service.deleteReview(10L);
		assertThat(repository.count()).isEqualTo(2);
	}

	@Test
	public void createNewReviewTest() {
		assertThat(repository.count()).isEqualTo(3);
		User user1 = new User(1L, "testFirstName", "testLastName", "test@test.ch", "testpw", "testToken", null);
		Restaurant restaurant1 = new Restaurant(1L, "testLogo", "testRestaurantName", "testAddress", "0123456789",
				"testrestaurant@test.ch", "testuri", null);
		Review review = new Review("something text1..", 3, LocalDateTime.now(), user1, restaurant1);
		service.create(review);
		assertThat(repository.count()).isEqualTo(4);
	}

}
