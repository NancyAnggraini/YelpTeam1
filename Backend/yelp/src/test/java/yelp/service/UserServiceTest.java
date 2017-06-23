package yelp.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import yelp.AbstractYelpIntegrationTests;
import yelp.domain.User;
import yelp.repository.UserRepository;

public class UserServiceTest extends AbstractYelpIntegrationTests{

	@Autowired
	UserService service;
	
	@Autowired
	UserRepository repository;
	

	@Test
	public void findById() {
		Long id = service.findById(1L).getId();
		assertThat(service.findById(id).getFirstName()).isEqualTo("testFirstName");
	}
	
	@Test
	public void deleteById() {
		assertThat(repository.count()).isEqualTo(3);
		User user = service.findById(1L);
		service.deleteById(user.getId());
		assertThat(repository.count()).isEqualTo(2);
	}
	
	@Test
	public void registerNewUser() {
		assertThat(repository.count()).isEqualTo(3);
		User newUser = new User("Miguel", "Perello", "popopo@pepepe.com", "caperucita", "123");
		service.registerNewUser(newUser);
		assertThat(repository.count()).isEqualTo(4);
	}
	
	@Test
	public void editUser() {
		User editUser = service.findById(1L);
		editUser.setEmail("checkingtest@test.com");
		service.update(editUser);
		assertThat(service.findById(1L).getEmail()).isEqualTo("checkingtest@test.com");
	}
}
