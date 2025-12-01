function maxNumber(arr1){

    let output = ""

    for(let i = 0; i < arr1.length; i++){

        let currentnumber = arr1[i]
        let isTop = true

        for(let j = i + 1; j < arr1.length; j++){

            if(currentnumber <= arr1[j]){
                isTop = false
                break
            }

        }
    if(isTop == true){
         output += currentnumber + " "
}
    }
    console.log(output)
}