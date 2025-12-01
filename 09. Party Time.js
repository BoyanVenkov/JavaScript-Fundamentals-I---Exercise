function softUniParty(arr) {
    let indexOfParty = arr.indexOf("PARTY")

    let guests = arr.slice(0, indexOfParty)
    let arrivals = arr.slice(indexOfParty + 1)

    let vipGuests = []
    let regularGuests = []

    for (let guest of guests) {
        if (/^\d/.test(guest)) {
            vipGuests.push(guest)
        } else {
            regularGuests.push(guest)
        }
    }

    for (let guest of arrivals) {
        let index = vipGuests.indexOf(guest)
        if (index !== -1) {
            vipGuests.splice(index, 1)
        } else {
            index = regularGuests.indexOf(guest)
            if (index !== -1) {
                regularGuests.splice(index, 1)
            }
        }
    }

    console.log(vipGuests.length + regularGuests.length)

    vipGuests.forEach(g => console.log(g))
    regularGuests.forEach(g => console.log(g))
}