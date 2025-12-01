function wordtracker(arr){
let wordsToTrack = arr.shift().split(" ")
let outputWords = {}

for(let element of wordsToTrack){
outputWords[element] = 0
}

for(let currentWord of arr){
    if(currentWord in outputWords){
        outputWords[currentWord]++
    }
}

let entries = Object.entries(outputWords)
entries.sort((a, b) => b[1] - a[1])

for(let[word, count] of entries){
console.log(`${word} - ${count}`)
}

}