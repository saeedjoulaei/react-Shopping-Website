import axios from "axios";

const base_url = "https://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios.get(`${base_url}/products`);
  return response.data;
};

export { getProducts };
