package yelp.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import yelp.AbstractYelpIntegrationTests;
import yelp.domain.Review;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Transactional
@Sql("/test-review-data.sql")
public class ReviewRepositoryTest extends AbstractYelpIntegrationTests{

	@Autowired
	ReviewRepository repository;
	
	@Test
	public void count() {
		assertThat(repository.count()).isEqualTo(3);
		assertThat(repository.findAll().size()).isEqualTo(3);
		
	}
	
	@Test
	public void findReviewByUserId () {
		
		 List <Review> list = new ArrayList<Review>();
		 list = repository.findByUserId(1L); 
		 // two values expected
		 assertThat(list.get(0).getUser().getLastName()).isEqualTo("testLastName");
		 assertThat(list.get(1).getUser().getLastName()).isEqualTo("testLastName");
		 assertThat(repository.findByUserId(1L).size()).isEqualTo(2);
		
	}
	
//	findByRestaurantId
	@Test
	public void findReviewsByRestaurantId () {
		
		List <Review> list = new ArrayList<Review>();
		list = repository.findByRestaurantId(2L); 
		// two values expected
		assertThat(list.get(0).getRestaurant().getName()).isEqualTo("testRestaurantName2");
		assertThat(list.get(1).getRestaurant().getName()).isEqualTo("testRestaurantName2");
		
		assertThat(repository.findByRestaurantId(2L).size()).isEqualTo(2);
		
	}
	
	
//	findByRestaurantId
	
	@Test
	public void findById(){
		assertThat(repository.findById(2L).getText()).isEqualTo("irgendwas text2..");
		
	}
}
