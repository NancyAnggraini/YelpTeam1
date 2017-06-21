package yelp.com.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = "id")
public class Restaurant {
	private int id;
	private String name;
	private String address;
	private String email;
	private String phone;
	private String logo;
	private String uri;
	private List<Review> reviews;
	
}
