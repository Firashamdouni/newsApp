import axios from "axios";

var url = "https://newsapi.org/v2/top-headlines";

const instance = axios.create({
	baseURL: url,
	timeout: 9999,
	headers: { "content-type": "application/x-www-form-urlencoded" },
	responseType: "json",
});
export default instance;
