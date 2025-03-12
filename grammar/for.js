const letter = ['a', 'b', 'c', 'd'];

for (let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
}

console.log("");

// forEach
letter.forEach(function (f) {
    console.log(f);
})

console.log("");

letter.forEach((f) => {
    console.log(f);
})

console.log("");

letter.forEach((f) => console.log(f));

console.log("");

for(const f of letter) {
    console.log(f);
}