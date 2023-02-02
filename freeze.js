const bottle = {color: 'yellow',price: 50, isClean: true, capacity: 1};
// const keys = Object.keys(bottle);
// // console.log(keys)

// const values = Object.values(bottle);
// // console.log(values);

// const pair = Object.entries(bottle);
// // console.log(pair);

// const frezee = Object.freeze(bottle);
// console.log(frezee);
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isClean;
bottle.price = 1000;
console.log(bottle);