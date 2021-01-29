var RomanObj = {
    1:'I',
    4:'IV',
    5:'V',
    9:'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
};

function convertRoman(num){
    var tmp = [];
    var result = [];

    while(num>0){ 
        for(var key in RomanObj){
            if(num>=key){
                tmp.push(key);
            }
        }

        var keyNum = tmp.pop();
        num = num-keyNum;

//      console.log("keyNum:" + keyNum + " num: " + num);
        result.push(RomanObj[keyNum]);
    }
    return result.join('');
}

console.log(convertRoman(66)); //[50,10,5,1] => LXVI
console.log(convertRoman(50)); //[50] => L
console.log(convertRoman(25)); //[10,10,5] => XXV