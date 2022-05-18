//Problem #1
function solutionone (params){
const numberinput= params;
let natural=0;
if (numberinput < 0)
    return 0;
//Multiple of 3 or 5
for(let i=0 ; i<= numberinput ; i++){
 if ((i% 3===0) || (i% 5===0))
    {
     natural+=i;
    }
}
console.log(natural);

}

// Problem #2

function countDigits(number){
    if(!(number!==0)){
        return 0;
    }
    return 1+ countDigits(~~(number / 10));

}
function isNarcisistic(number){
    let digits=countDigits(number);
    let n=number;
    let sum = 0;
    while(n > 0){
        sum+=(n % 10)**digits;
        n=(~~(n / 10));
        }//End while
        console.log('isNarcisistic: '+ sum===number);
    return sum===number;

}
const solution2= isNarcisistic(153);


//Problem #3

function myfuncmask (word){
    let valueFinals= word;
    let values=valueFinals.substring(0,valueFinals.length-4);
    let encryptedValue = values.replace(/[\da-zA-Z]/g, "#");
    console.log(encryptedValue+(valueFinals.substring(valueFinals.length-4)));
    return encryptedValue+(valueFinals.substring(valueFinals.length-4));
}
myfuncmask('12239999999999999999999999902948');



//Problem 4

function solutionIsPangram(string){
    let lowerCase = string.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
    .replace(/s{2,}/g, " ");
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

     for (let i = 0; i < alphabet.length; i++) {
      if(lowerCase.indexOf(alphabet[i]) < 0){
        console.log('This word is not a Pangram');
        return false;
      }
    }
    console.log('This word it is a Pangram');
    return true;
  }
  solutionIsPangram('This is US @$$#@%$jfj   :: Family first');


  // Problem 5

  function myDuplicatecount(string){
    let count = 0;
    let lowerCase = string.toLowerCase();
    let stack='';
  for (let i=0 ; i < lowerCase.length; i++){
      let countChar = findCharacter(lowerCase[i],lowerCase);
      if(countChar>1 && stack.indexOf(lowerCase[i])==-1 ){
          stack+=lowerCase[i];
          count+=countChar;
          console.log('La letra '+ lowerCase[i] + ' esta duplicado : '+countChar);
      }
  }
  //console.log('El numero de duplicado es: '+ count);
  return count;
}

function findCharacter(character, string){
  let counterChar =0;  
  for(let i=0;i<string.length;i++){
      if(character === string[i]){
          counterChar++;
          
      }
    }
    
    return counterChar;
}
myDuplicatecount('Indivisibilities');