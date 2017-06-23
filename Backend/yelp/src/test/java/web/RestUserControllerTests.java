package web;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.is;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import yelp.AbstractTwitterWebIntegrationTests;
import yelp.repository.UserRepository;

/**
 * Integration tests for the {@link RestUserController}.
 */
public class RestUserControllerTests extends AbstractTwitterWebIntegrationTests {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	UserRepository repo;

	@Test
	public void retrieveAllUsers() throws Exception {
		mockMvc.perform(get("/users").accept(APPLICATION_JSON))//
				.andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON))//
				.andExpect(status().isOk())//
				.andExpect(jsonPath("$[1]").exists())//
				// last names of users whose first name starts with "J"
				.andExpect(jsonPath("$[?(@.firstName =~ /J.+/)].lastName", hasItems("Smith")));
	}

	@Test
	public void retrieveUser() throws Exception {
		String username = "jsmith";
		mockMvc.perform(get("/users/{username}", username).accept(APPLICATION_JSON))//
				.andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON))//
				.andExpect(status().isOk())//
				.andExpect(jsonPath("$.id", is(1)))//
				.andExpect(jsonPath("$.firstName", is("John")))//
				.andExpect(jsonPath("$.lastName", is("Smith")))//
				.andExpect(jsonPath("$.username", is(username)))//
				.andExpect(jsonPath("$.email", is("jsmith@example.com")))//
				.andExpect(jsonPath("$.password").doesNotExist())//
				.andExpect(jsonPath("$.roles").doesNotExist())//
				.andExpect(jsonPath("$.tweets").doesNotExist());
	}

	@Test
	public void retrieveNonexistentUser() throws Exception {
		mockMvc.perform(get("/users/{username}", "bogusUser").accept(APPLICATION_JSON))//
				.andExpect(status().isNotFound());
	}

	@Test
	public void retrieveTweetsByUsername() throws Exception {
		String username = "jsmith";
		mockMvc.perform(get("/users/{username}/tweets", username).accept(APPLICATION_JSON))//
				.andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON))//
				.andExpect(status().isOk())//
				.andExpect(jsonPath("$[*].username", hasItems(username)))//
				.andExpect(jsonPath("$[*].text", hasItems("Happy New Year!", "Happy Valentine's Day!")));
	}

	@Test
	public void registerNewUser() throws Exception {
		long count = repo.count();
		String json = "{\"username\": \"test_user\", \"password\": \"Passw0rd\", \"email\": \"test_user@example.com\", \"firstName\": \"Test\", \"lastName\": \"User\"}";

		mockMvc.perform(post("/users/").contentType(APPLICATION_JSON)//
				.content(json))//
				.andExpect(status().isCreated());

		assertThat(repo.count()).isEqualTo(count + 1);
	}

	@Test
	public void registerNewUserWithDuplicateUsername() throws Exception {
		String json = "{\"username\": \"jsmith\", \"password\": \"Passw0rd\", \"email\": \"test_user@example.com\", \"firstName\": \"Test\", \"lastName\": \"User\"}";

		mockMvc.perform(post("/users/").contentType(APPLICATION_JSON)//
				.content(json))//
				.andExpect(status().isConflict());
	}

}