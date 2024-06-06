function sumNumbers(input){

    let num = Number(input[0])
    let index = 1
    let sum = 0
    let currentNum = Number(input[index])

    while(sum !== num){
        sum += currentNum
        index++
        currentNum = Number(input[index])
             
    }

console.log(sum);


}
sumNumbers(["100", "10", "20", "30", "40"])