const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			let num1 = arr[j];
			let num2 = arr[j + 1];
			if (num2 < num1) {
				[arr[j], arr[j + 1]] = [num2, num1];
			}
		}
	}
	return arr;
};

const bubbleSort1 = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			let num1 = array[j];
			let num2 = array[j + 1];
			if (num1 > num2) {
				[array[j + 1], array[j]] = [array[j], array[j + 1]];
			}
		}
	}

	return array;
};

console.log(
	bubbleSort1([5, 3, 8, 4, 2, 1, 99, 99, -20, 80])
);
