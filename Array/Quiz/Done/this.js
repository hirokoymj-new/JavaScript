const multiplier = {
  numbers: [1,2],
  multiplyBy: 3,
  multiply(){       
      //const output = this.numbers.map((num) => num * this.multiplyBy);
      const output = this.numbers.map(function(num){
        console.log(this);
        console.log(this.multiplyBy)
        return num * this.multiplyBy
      })
  }
}
console.log(multiplier.multiply()); //[3,6]