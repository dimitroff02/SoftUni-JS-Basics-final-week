function maxNum(input){
    let maxNum = -9999999999999999999999999999999999999
    let index = 0
    let currentRow = input[index]

    while(currentRow !== "Stop"){
        let rowAsNum = Number(currentRow)
        
        if(rowAsNum > maxNum){
            maxNum = rowAsNum
        }
        index++
        currentRow = input[index]



    }
    console.log(maxNum);




}
maxNum(["100","99","80","70","Stop"])