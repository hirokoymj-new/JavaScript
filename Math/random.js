const myArray = [3,5,2];

const sum = (array) =>{
  const result = array.reduce((acc, value)=>{
    acc = acc + value;
    return acc;
  },0);
  console.log(result);
}
sum(myArray); //10