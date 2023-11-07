import { calculateTotalPower } from "./calculateTotalPower"

export function calculateCardColor(totalPower) {
    const roundedPower = Math.round(totalPower / 100) * 100;

    const hashPowerColors = {
        100: "gray",
        200: "#11FA00",
        300: "#11FA00",
        400: "#C000F5",
        500: "#FF5901",
        600: "#FF2500"
    }
    return hashPowerColors[roundedPower]
}