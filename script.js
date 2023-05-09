

let num = 14;
let sum;

if (num >= 10 && num <= 99) {
	sum = String(num)[0] + String(num)[1];
		if (sum <= 10) {
			console.log('сумма циф числа однозначна')
		} else {
			console.log('сумма цифр числа двузначна');
		}
}

