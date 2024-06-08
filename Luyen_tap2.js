// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
function powNumber(a) {
    return Math.pow(a, 2);
} console.log(powNumber(2))

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.Gọi hàm vừa xây dựng được
function handleCircle(r) {
    let c = 2 * r * Math.PI;
    let s = Math.PI * Math.pow(r, 2);
    console.log(`Chu vi hinhf tronf bawngf ${c} va dien tich bang ${s}`);
} console.log(handleCircle(2));

// Bài 3:Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
function handleFactorial(k) {
    if (k === 0) {
        return 1;
    }
    return k * handleFactorial(k - 1);
} console.log(handleFactorial(5));

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function handleNumber(number) {
    if (number >= '0' && number <= '9') {
        return true;
    } else {
        return false;
    }
}
console.log(handleNumber(""))

// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
function minNumber(e, f, g) {
    return Math.min(e, f, g);
} console.log(minNumber(1, 2, 3));

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.Nếu là nguyên dương trả về true, ngược lại trả về false.
function integerNum(h) {
    if (h > 0) {
        return true;
    } return false
} console.log(integerNum(-2))

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function numConvert(l, j) {
    let p = 0
    p = l
    l = j;
    j = p;
    return [l, j];
} console.log(numConvert(1, 2));

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function handleArray() {
    const arr = [1, 2, 3, 4, 5];
    return arr.reverse();
} console.log(handleArray())
// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1. 
function handleArr(array, char) {

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == char) {
            count++
        }
    } return count > 0 ? count : -1
} console.log(handleArr(['a', 'a', 'b'], 'a'))