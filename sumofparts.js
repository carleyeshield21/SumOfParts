// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
function partsSums(ls) {
    let sum = 0
    for(i=0; i<=ls.length-1; i++){
        sum += ls[i]
    }
    // console.log(sum)
    let sumparts = sum
    let sumarr = [sum]
    for(i=0; i<=ls.length-1; i++){
        sumparts -= ls[i]
        sumarr.push(sumparts)
    }
    console.log(ls)
    console.log(sumarr)
}
partsSums([1, 2, 3, 4, 5, 6])
console.log('========')
partsSums([0, 1, 3, 6, 10])
console.log('========')
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])