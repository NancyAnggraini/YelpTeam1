package yelp.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = { "id", "dateCreated" })
public class Review2Copy {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "content", nullable = true, length = 1000)
	private String text;
	@Column(name = "rate", nullable = true, length = 1)
	private int rating;
	@Column(name = "createAt", nullable = true)
	private LocalDateTime dateCreated;

	@ManyToOne
	private User user;

	@ManyToOne
	private Restaurant restaurant;

	public Review2Copy() {
		// JPA required :)
	}

	public Review2Copy(String text, int rating, LocalDateTime dateCreated, User user, Restaurant restaurant) {
		// super();
		this.text = text;
		this.rating = rating;
		this.dateCreated = dateCreated;
		this.user = user;
		this.restaurant = restaurant;
	}
}
