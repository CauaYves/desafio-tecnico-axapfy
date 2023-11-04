import { calculateTotalPower } from "./calculateTotalPower";

export function calculateWinner(metahumansArr) {
    const totalPowerOne = calculateTotalPower(metahumansArr[0].powerstats)
    const totalPowerTwo = calculateTotalPower(metahumansArr[1].powerstats)

    let winner
    if(totalPowerOne > totalPowerTwo) winner = metahumansArr[0].name
    else  winner = metahumansArr[1].name

    return winner
}