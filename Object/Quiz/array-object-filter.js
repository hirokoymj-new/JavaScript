const cityArray = [
  { id: 1, city: "New York" },
  { id: 2, city: "Los Angeles" },
  { id: 3, city: "Washington DC" },
  { id: 4, city: "San Jose" },
  { id: 5, city: "Mountain View" },
];

var city_id = 2;

//Checking if city id 2 exists in cityArray

const result = cityArray.find((value) => value.id === 2);
console.log(result);
//{ id: 2, city: 'Los Angeles' }

const result2 = cityArray.filter((value) => value.id === 2);
console.log(result2);
//[ { id: 2, city: 'Los Angeles' } ]
