// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*the reason is that an equality check and comparison check work differently
Comparison convert null to a number, treating it as 0 thats why null >= 0 gives true and null > 0 gives false */

// strict check
console.log("2" === 2);