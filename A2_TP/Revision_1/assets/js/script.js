let favFoods = ['fries', 'chocolate', 'tomato', 'butter'];
console.log(favFoods[1]);
favFoods.pop();
let ancienFavFoods = favFoods.shift();
console.log(ancienFavFoods);
console.log(favFoods);
favFoods.push('scream');
console.log(favFoods);
favFoods.unshift('soja');
console.log(favFoods);
let arr = [];
arr.pop();
console.log(arr);
let spliceArr1 = [2, 3, 4, 5];
spliceArr1.splice(1, 1);
console.log(spliceArr1);
let spliceArr2 = ["alpha", "gamma", "delta"];
spliceArr2.splice(1, 0, 'beta');
let spliceArr3 = [10,-10,-5,-3,2,1];
spliceArr3.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log(spliceArr3);