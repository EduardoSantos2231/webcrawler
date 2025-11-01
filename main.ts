import { fetchCieeMultipleTimes } from "./crawler/ciee.crawler.js";


const data = await fetchCieeMultipleTimes(3)
console.log(data)