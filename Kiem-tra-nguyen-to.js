function isPrime(number) {
    let count = 0;
    let prime = false;
    if (number === 0) {
        console.log(`${number} không phải lầ số nguyên tố`);
    } else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count += 1;
            }
        }
        if (count == 2) {
            prime = true;
        }
    }
    if (prime) {
        console.log(`${number} là số nguyên tố`);
    } else {
        console.log(`${number} không phải la số nguyên tố`)
    }
}
console.log(isPrime(4));

////////////////////
function translate(work) {
    let engList = ["dog", "cat", "go"];
    let vietNames = ["cho", "meo", "di"];
    let indexVitri = -1;
    for (let i = 0; i < engList.length; i++) {
        if (work === engList[i]) {
            indexVitri = i;
            break;
        }
    }
    let keyWork = vietNames[indexVitri];
    return keyWork;
}
let tucantim = "dog";
let kq = translate(tucantim);
console.log(kq);