function accountBalance(input){

    let totalSum = 0
    let index = 0
    let currentRow = input[index]

    while (currentRow !== "NoMoreMoney") {
        let rowAsNum = Number(currentRow)

        if(rowAsNum < 0){
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${rowAsNum.toFixed(2)}`);
        totalSum += rowAsNum
        index++
        currentRow = input[index]
        
        
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);





}
accountBalance(["5.51","69.42","100","NoMoreMoney"])