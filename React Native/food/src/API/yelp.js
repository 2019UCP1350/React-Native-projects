import axios from "axios";

export default axios.create({
	baseURL:"https://api.yelp.com/v3/businesses",
	headers:{
		Authorization:"Bearer 8R78-GRsBZJ5jFlLnyVuibAAjYQTPXv4R3o2Sj2ej2Hv4I7jjL5FQsdswVulXQ0pPQ8Ie3rYDbvaDiEKzRyrpihQ_eftr8IH2sIgK0r-wsL5kQ468tH76SQmMyVHX3Yx",
	}
});