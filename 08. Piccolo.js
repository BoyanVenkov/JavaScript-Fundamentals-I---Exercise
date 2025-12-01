function piccolo(arr) {
    let parkingLot = new Set()

    for (let carInfo of arr) {
        let [direction, carNumber] = carInfo.split(", ")

        if (direction === "IN") {
            parkingLot.add(carNumber)
        } else if (direction === "OUT") {
            parkingLot.delete(carNumber)
        }
    }

    if (parkingLot.size > 0) {
        Array.from(parkingLot)
            .sort((a, b) => a.localeCompare(b))
            .forEach(car => console.log(car))
    } else {
        console.log("Parking Lot is Empty")
    }
}