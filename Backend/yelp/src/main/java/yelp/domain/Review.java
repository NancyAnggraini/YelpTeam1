package yelp.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@AllArgsConstructor
@Table(name = "review")
@EqualsAndHashCode(exclude = {"id", "dateCreated"})
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "text", nullable = false, length = 1000)
	private String text;
	
	@Column(name = "rating", nullable = false, length = 1)
	private int rating;
	
	@Column(name = "date_created", updatable = false, nullable = false)
	private LocalDate dateCreated;
	
	@ManyToOne(optional=false)
	private User user;
	
	@ManyToOne(optional=false)
	private Restaurant restaurant;
	
	public Review () {
		
	}
	
	public Review (String text, int rating, LocalDate dateCreated, Restaurant restaurant, User user) {
		this.text = text;
		this.rating = rating;
		this.dateCreated=dateCreated;
		this.restaurant = restaurant;
		this.user = user;
	}
}
