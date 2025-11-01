import { fetchCieeMultipleTimes } from "./crawler/ciee.crawler.js";


const data = await fetchCieeMultipleTimes(1)
console.log(data)