function oddOccurancies(text) {
    let words = text.toLowerCase().split(" ");
    let outputWords = {};
    let outputArray = [];

    for (let word of words) {
        outputWords[word] = (outputWords[word] || 0) + 1;
    }

    for (let word of words) {
        if (outputWords[word] % 2 !== 0 && !outputArray.includes(word)) {
            outputArray.push(word);
        }
    }

    console.log(outputArray.join(" "));
}