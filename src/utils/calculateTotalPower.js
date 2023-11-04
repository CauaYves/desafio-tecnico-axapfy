export function calculateTotalPower(powerstatsObj) {
    let total = 0
    for(const key in powerstatsObj){
        total += powerstatsObj[key]
    }
    return total
}