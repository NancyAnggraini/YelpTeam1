package yelp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import yelp.domain.JsonViews;
import yelp.domain.User;
import yelp.service.UserService;

@RestController
@RequestMapping("/users")
public class RestUserController {

	UserService userService;
	
	@Autowired
	public RestUserController (UserService userService){
		this.userService = userService;
	}
		
	//CHECK!!!!!! This class can be working different, in the example we had
	// from Sam it was working different, but it should work!
	@JsonView(JsonViews.NewUser.class)
	@PostMapping("/sign_up")
	public User registerNewUser(@RequestBody User postedUser) {
		return userService.registerNewUser(postedUser);
	}
	
}
