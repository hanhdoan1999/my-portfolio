import axios from 'axios';

const BASE_URL = 'https://fir-blog-19b47-default-rtdb.firebaseio.com/posts';

// Function to get all products
export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Function to get a single product by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
