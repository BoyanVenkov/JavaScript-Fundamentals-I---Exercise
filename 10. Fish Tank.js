function aquariumWater(lengthCm, widthCm, heightCm, percentOccupied) {
    let volumeCm3 = lengthCm * widthCm * heightCm

    let volumeLiters = volumeCm3 / 1000

    let waterLiters = volumeLiters * (1 - percentOccupied / 100)

    console.log(waterLiters.toFixed(2))
}