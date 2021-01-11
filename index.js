// Code your solutions in this file
//for ([initialization]; [condition]; [iteration]) {
    //[loop body]
  //} 

const arrayOfNames = ["Mai", "Zach", "Eric"]
const eventName = "surprise"

function writeCards(arrayOfNames, event){
    let arr2 = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        arr2.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return arr2;
}



function countDown(num) {
    //let i = num
    while (num >= 0){
        console.log(num--)
    }
}