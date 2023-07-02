
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

let key = [a, b, c, d, e];

for (let i = 0; i < key.length -1; i++) {
	if (obj[key[i]] % 2 === 0) {
		obj2[key[i]] = obj[key[i]];
	}


}

console.log(obj2);