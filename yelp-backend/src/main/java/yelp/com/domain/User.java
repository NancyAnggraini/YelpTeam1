package yelp.com.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id"})
public class User {
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String token;
}
