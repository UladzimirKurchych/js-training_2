

let arr = [1, 1, 1, 1, 3, 5];
let pos = 0;


for (i = 0; i < arr.length; i++) {
	if (arr[i] == 3) {
		break;
	}
	pos += 1;
}

console.log(pos);