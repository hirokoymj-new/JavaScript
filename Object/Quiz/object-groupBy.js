const gdp = {
  city: "LA",
  gdp: [],
};

const income = {
  city: "LA",
  income: [],
};

const uRate = {
  city: "SF",
  uRate: [],
};
//{ city: [ 'LA', 'LA', 'SF' ], gdp: [], income: [], uRate: [] }

const extend = (a, b, c) => {
  var output = {};
  var array = [a, b, c];

  array.forEach((obj) => {
    for (const key in obj) {
      if (output.hasOwnProperty(key)) {
        output[key].push(obj[key]);
      } else {
        output[key] = typeof obj[key] === "object" ? obj[key] : [obj[key]];
      }
    }
  });
  return output;
};
console.log(extend(gdp, income, uRate));

const extend2 = (a, b, c) => {
  const output = [a, b, c].reduce((acc, currentValue) => {
    for (const [key, value] of Object.entries(currentValue)) {
      if (acc.hasOwnProperty(key)) {
        acc[key].push(value);
      } else {
        acc[key] = typeof value === "object" ? value : [value];
      }
    }
    return acc;
  }, {});
  return output;
};
console.log(extend2(gdp, income, uRate));

// Points
// typeof value === "object"
// // typeof value === "string"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
