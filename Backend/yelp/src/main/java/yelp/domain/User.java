package yelp.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@AllArgsConstructor
@Table(name = "user")
@EqualsAndHashCode(exclude = {"password", "id"})
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "first_name", nullable = false, length = 30)
	private String firstName;
	
	@Column(name = "last_name", nullable = false, length = 45)
	private String lastName;
	
	@Column(unique = true, nullable = false, length = 75)
	private String email;
	
	@Column(nullable = false, length = 76)
	private String password;
	
	@Column(nullable = false, length = 75)
	private String token;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval=true)
	private List <Review> reviews;
	
	public User(){
		/* default constructor: required by JPA */
	}
	
	public User (String firstName, String lastName, String email, String password, String token, List <Review> reviews){
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.token = token;
		this.reviews = reviews;
	}
}
