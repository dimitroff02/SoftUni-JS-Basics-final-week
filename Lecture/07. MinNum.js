function minNum(input){

    let minNum = 9999999999999999999999999999999999999
    let index = 0
    let currentRow = input[index]

    while(currentRow !== "Stop"){
        let rowAsNum = Number(currentRow)
        
        if(rowAsNum < minNum){
            minNum = rowAsNum
        }
        index++
        currentRow = input[index]



    }
    console.log(minNum);


}
minNum(["100",

"99",

"80",

"70",

"Stop"])