import axios from 'axios';

const BASE_URL = 'https://fir-blog-19b47-default-rtdb.firebaseio.com/projects';

// Function to get all products
export const getAllProject = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Function to add projects
export const createProject = async (project) => {
    try {
      const response = await axios.post(`${BASE_URL}.json`,project);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  };

// Function to get a single product by ID
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};
