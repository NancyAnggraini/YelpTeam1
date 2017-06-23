package yelp.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import yelp.service.DefaultReviewService;
import yelp.service.ReviewService;

public class ReviewDomainTest {
	
	@Autowired
	ReviewService reviewService; 

	@Test
	public void createReview() {
		
		Restaurant rest1 = new Restaurant("Test Restaurant Name", "pepe, 8", "asd@asd.com", "123456789", "logo.jpg", "www.lamacarena.com");
		assertEquals("123456789", rest1.getPhone());
//		(String text, int rating, LocalDate dateCreated, User user, Restaurant restaurant);
		Review rev1 = new Review("irgendwas text1..", 3, LocalDateTime.now(), new User(), rest1);
		Review rev2 = new Review("irgendwas text2..", 4, LocalDateTime.now(), new User(), rest1);
		Review rev3 = new Review("irgendwas text3..", 2, LocalDateTime.now(), new User(), rest1);
		assertEquals("irgendwas text1..", rev1.getText());
		assertEquals(2, rev3.getRating());
		assertEquals("asd@asd.com", rev2.getRestaurant().getEmail());
		
		
		
		/*
		 * 
		 * @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "content", nullable = true, length = 1000)
	private String text;
	@Column(name = "rate", nullable = true, length = 1)
	private int rating;
	@Column(name = "createAt", nullable = true)
	private LocalDateTime dateCreated;
	
	@ManyToOne
	private User user;
	
	@ManyToOne
	private Restaurant restaurant;
		 */
	}
	
	
	@Test
	public void findReviewByUserId () {

		User user1 = new User(1L,"testFirstName", "testLastName", "test@test.ch", "testpw", "testToken");
		User user2 = new User(2L,"testFirstName2", "testLastName2", "test2@test.ch", "testpw2", "testToken2");
		User user3 = new User(3L,"testFirstName3", "testLastName3", "test3@test.ch", "testpw3", "testToken3");
		
		Restaurant restaurant1 = new Restaurant(1L, "testLogo", "testRestaurantName", "testAddress", "0123456789", "testrestaurant@test.ch", "testuri"); 
		Restaurant restaurant2 = new Restaurant(2L, "testLogo2", "testRestaurantName2", "testAddress2", "012345678922", "testrestaurant2@test.ch", "testuri2"); 
		Restaurant restaurant3 = new Restaurant(3L, "testLogo3", "testRestaurantName3", "testAddress3", "012345678933", "testrestaurant3@test.ch", "testuri3"); 
		
		Review rev1 = new Review("irgendwas text1..", 3, LocalDateTime.now(), user1, restaurant1);
		Review rev2 = new Review("irgendwas text2..", 4, LocalDateTime.now(), user2, restaurant2);
		Review rev3 = new Review("irgendwas text3..", 2, LocalDateTime.now(), user3, restaurant3);
		
//		 List <Review> list = new ArrayList<Review>();
//		 list = repository.findByUserId(1L); 
//		 // two values expected
//		 assertThat(list.get(0).getUser().getLastName()).isEqualTo("testLastName");
//		 assertThat(list.get(1).getUser().getLastName()).isEqualTo("testLastName");
		 assertThat(reviewService.getReviewListByUserId(1L).size()).isEqualTo(1);
		 
//		 assertThat(reviewService.findAll()).hasSize(NUM_TEST_USERS);
		
	}
	
}
