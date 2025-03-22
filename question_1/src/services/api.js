import axios from "axios";

const API_URL = "http://20.244.56.144/test";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
