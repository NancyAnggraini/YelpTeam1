package yelp.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Transactional
@Sql("/test-data.sql")
public class RestaurantServiceTest {

	@Autowired
	RestaurantService service;
	
	@Test
	public void findAll(){
		assertThat(service.findAll().size()).isEqualTo(3);		
	}
	
	@Test
	public void findById(){
		assertThat(service.findById(1L).getName()).isEqualTo("testRestaurantName");
	}
	
	@Test
	public void findByRestaurantName(){
		assertThat(service.findRestaurantByName("2").size()).isEqualTo(1);
		assertThat(service.findRestaurantByName("testRestaurantName").size()).isEqualTo(3);
	}
}
