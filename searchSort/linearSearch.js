const search = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		console.log(`iteration count`,i)
    if (target === item) return i;
	}
	return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
