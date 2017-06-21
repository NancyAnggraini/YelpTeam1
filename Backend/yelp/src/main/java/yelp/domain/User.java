package yelp.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id"})
public class User {
	@Id
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String token;
}
