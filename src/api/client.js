import axios from "axios";
import { API_URL } from "@env";

const base_url = API_URL + "/api";
console.log(base_url);
const client = axios.create({ baseURL: base_url });

export default client;
