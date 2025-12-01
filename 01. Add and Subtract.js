function addsAndSubstract(inputArr){

let sumInputArr = 0
let sumOutputArr = 0

for (let i = 0; i < inputArr.length; i++){
sumInputArr += inputArr[i]
if(inputArr[i] % 2 == 0){
inputArr[i] += i
sumOutputArr += inputArr[i]
}
else{
inputArr[i] -= i 
sumOutputArr += inputArr[i]
}
}
console.log(inputArr)
console.log(sumInputArr)
console.log(sumOutputArr)
}