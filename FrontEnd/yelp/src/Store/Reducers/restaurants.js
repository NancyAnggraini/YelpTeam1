const initialState = [
	{ id: 1, name: "Ristorante Bindella", email: "bindella@ristorante.com", phone: "044 221 25 46", 
	web: "http://www.bindella.ch/de/bindella-zuerich.html", address: "In Gassen 6, 8001 Zürich", 
	reviews: [ 
		{ id: 1, content: "Freaking awesome!", rate: 5, user: { id: 1, firstName: "Susan", lastName: "Johnson"}
		{ id: 2, content: "Best service ever", rate: 5, user: { id: 2, firstName: "Robert", lastName: "Smith"}
		]
	}
	{ id: 2, name: "Echo", email: "info@echorestaurant.ch", phone: "044 360 73 18", 
	web: "http://www.echorestaurant.ch/", address: "Neumühlequai 42, 8006 Zürich", 
	reviews: [ 
		{ id: 1, content: "Very nice restaurant", rate: 4, user: { id: 1, firstName: "Susan", lastName: "Johnson"}
		{ id: 2, content: "Good food, nice location", rate: 4, user: { id: 2, firstName: "Robert", lastName: "Smith"}
		]
	}
]


const restaurants = (state = initialState, action) => {
  return state;
}

export default restaurants;
