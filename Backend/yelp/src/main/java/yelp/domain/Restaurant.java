package yelp.domain;

import java.util.List;

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
import lombok.Setter;

@Entity
@Table(name = "restaurant")
@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = "id")
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "name", nullable = false, length = 40)
	private String name;
	
	@Column(name = "address", nullable = false, length = 120)
	private String address;
	
	@Column(name = "email", nullable = false, length = 75)
	private String email;
	
	@Column(name = "phone", nullable = false, length = 15)
	private String phone;
	
	@Column(name = "logo", nullable = false, length = 150)
	private String logo;
	
	@Column(name = "uri", nullable = false, length = 75)
	private String uri;
	
	//List for reviews
	@OneToMany
	private List<Review> reviews;
	
	public Restaurant() {
		/* default constructor: required by JPA */
	}
	
	public Restaurant (String name, String address, String email, String phone, String logo, String uri){
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.logo = logo;
		this.uri = uri;
	}
	
}
