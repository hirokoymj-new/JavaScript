const data = [
  { description: "Rent", amount: 100, createdAt: 1000 },
  { description: "Coffee", amount: 300, createdAt: -1000 },
  { description: "Small Coffee", amount: 300, createdAt: -1000 },
];

// Find a desciption is 'Rent'.

const matched = data.find((value) => value.description === "Rent");
console.log(matched);
// { description: 'Rent', amount: 100, createdAt: 1000 }
