package yelp.domain;

import java.time.LocalDate;

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
@Table(name = "review")
@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id", "dateCreated"})
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String text;
	private int rating;
	private LocalDate dateCreated;

	@ManyToOne
	private User user;
	
	@ManyToOne
	private Restaurant restaurants;
}
