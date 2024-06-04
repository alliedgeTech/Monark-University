import axios from "axios";

/**
 * Add Base URL
 */
const API_BASE_URL = process.env.yyREACT_APP_API_BASE_URL || "http://192.168.29.252:7000";

/**
 * Function to make API requests using Axios
 * @param {Object} props - The properties required for making an API service request
 * @param {string} props.method - The HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} props.endpoint - The API endpoint
 * @param {Object} [props.headers] - Additional headers for the request
 * @param {Object} [props.data] - Data to be sent with the request (for POST and PUT requests)
 * @returns {Promise} A Promise that resolves with the API response data
 */
const ApiService = async ({ method, endpoint, headers = {}, data }) => {
  /**
   *  Configuration for Axios request
   */
//   const token = localStorage.getItem('accessToken');

  const axiosConfig = {
    method,
    url: `${API_BASE_URL}/${endpoint}`,
    headers: {
    //   'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json",
      ...headers,
    },
    data,
  };

  console.log(JSON.stringify(axiosConfig.data));
  console.log(axiosConfig);

  /**
   * Creating an instance of Axios
   */
  const api = axios.create();

  api.interceptors.request.use((config) => {
    return config;
  });

  /**
   * Intercepting response before it is resolved
   */
  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error("API Response Error:", error);
      throw error;
    }
  );

  try {
    // Making the API request
    const response = await api(axiosConfig);
    return response;
  } catch (error) {
    // Throwing any encountered errors
    throw error;
  }
};

export default ApiService;
