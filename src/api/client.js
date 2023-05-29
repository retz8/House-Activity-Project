import axios from "axios";
import Constants from "expo-constants";

const base_url = Constants?.expoConfig?.extra?.API_URL + "/api";
const client = axios.create({ baseURL: base_url });

export default client;
