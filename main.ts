import {
  fetchCieeMultipleTimes,
  fetchSolidesMultipleTimes,
} from "./crawlers/index.js";

import { askInfo, rl } from "./utils/readlineMethods.js";
// const data = await fetchCieeMultipleTimes(1)
// console.log(data)

// // const data = await fetchSolidesMultipleTimes(1)
// console.log(data)
//
const city = await askInfo("Sua cidade: ");
const estado = await askInfo("Seu estado: ");
rl.close()

console.log(city, estado)