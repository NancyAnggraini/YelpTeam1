package yelp.service;


import yelp.domain.User;

public interface UserService {
	
	User registerNewUser(User user);
	
	User update(User user);

	void deleteById(Long id);

	User findById(Long id);
	
	void anonymize (User user);
}
