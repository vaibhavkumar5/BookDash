import axios from "axios";

const API_BASE_URL = "https://openlibrary.org";

export const fetchBooks = async (query) => {
  const params = {
    q: query,
    fields: "key,title,author_name,ratings_average,first_publish_year",
  };
  try {
    const response = await axios.get(`${API_BASE_URL}/search.json`, { params });
    console.log("API Response:", response.data); // Log the API response
    
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return { docs: [], numFound: 0 };
  }
};

export const fetchAuthors = async(query)=>{
  const params={
    q: query,
  };
  try {
    const response = await axios.get(`${API_BASE_URL}/search/authors.json`, { params });
    console.log("API Response:", response.data); // Log the API response
    return response.data;
    
  } catch (error) {
    console.error("Error fetching author:", error);
    return { docs: [], numFound: 0 };
    
  }
}
