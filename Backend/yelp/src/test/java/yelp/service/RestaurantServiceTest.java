package yelp.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import yelp.AbstractYelpIntegrationTests;

public class RestaurantServiceTest extends AbstractYelpIntegrationTests {

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
