function footToMeter(foot) {
    let meter = 0.305 * foot;
    return meter;
}
function meterToFood(meter) {
    let foot = 3.279 * meter;
    return foot;
}
let a = footToMeter(2);
console.log(a);
let b = meterToFood(2);
console.log(b);

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    console.log(result)
    return result;
}
result = 0;
result = addNumbers();
console.log(result);