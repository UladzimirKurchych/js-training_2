

let sum = 0;

for (i = 1;;i++) {
	sum += i;
	if (sum > 100) {
		break;
	}
	console.log(sum);
}

console.log(i);