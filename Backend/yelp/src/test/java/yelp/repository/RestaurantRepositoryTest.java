package yelp.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import yelp.AbstractYelpIntegrationTests;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Transactional
@Sql("/test-data.sql")
public class RestaurantRepositoryTest extends AbstractYelpIntegrationTests{

	@Autowired
	RestaurantRepository repository;
	
	@Test
	public void count() {
		assertThat(repository.count()).isEqualTo(3);
	}
	
	@Test
	public void findById(){
		assertThat(repository.findById(1L).getName()).isEqualTo("testRestaurantName");
	}
}
