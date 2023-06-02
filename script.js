
let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let positive = [];

for (let i = 0; i <= arr.length; i++) {
	if (arr[i] > 0) {
		positive.push(arr[i]);
	}

}

console.log(positive);