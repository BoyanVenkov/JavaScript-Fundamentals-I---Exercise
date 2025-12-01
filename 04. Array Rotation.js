function arrayRotation(arr1, n){
    for(let i = 0; i < n; i++){
            let firstElement = arr1.shift()
            arr1.push(firstElement)

    }
console.log(arr1.join(" "))
}