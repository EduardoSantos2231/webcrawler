import { fetchCieeMultipleTimes, fetchSolidesMultipleTimes } from "./crawlers/index.js"

// const data = await fetchCieeMultipleTimes(1)
// console.log(data)

const data = await fetchSolidesMultipleTimes(1)
console.log(data)