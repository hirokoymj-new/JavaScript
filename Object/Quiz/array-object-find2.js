const data = [
  { name: "Database", value: "5ff5addc7b26d000171ebe0d" },
  { name: "Git", value: "5fec597e5e17e200170e0ffe" },
  { name: "ES6", value: "5fcadae535b5e444496aeff9" },
];

value = "5ff5addc7b26d000171ebe0d";

const found = data.find((d) => d.value === value);
console.log(found);
