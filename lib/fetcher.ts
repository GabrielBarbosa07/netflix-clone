import axios from "axios";

const fetcher = (url: string) => axios.get(url, { headers: { "Content-Type": "Application/json" } }).then(res => res.data)

export default fetcher

export const BASE_URL = "https://netflix-clone-gb.vercel.app" 
