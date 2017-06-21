package yelp.com.domain;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id", "dateCreated"})
public class Review {
	private int id;
	private String text;
	private int rating;
	private LocalDate dateCreated;
	private User user;
}
