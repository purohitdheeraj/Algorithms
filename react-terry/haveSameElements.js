const haveSameElements = (array1, array2) => {
	// Write your code here
	if (array1.length !== array2.length) return false;
	const freqCount = {};

	array1.forEach((num) => {
		freqCount[num] = (freqCount[num] || 0) + 1;
	});

	for (let i = 0; i < array2.length; i++) {
		let item = array2[i];
		if (!freqCount[item]) return false;
	}
	return true;
};

const haveSameElements1 = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	let sortedArr1 = arr1.sort();
	let sortedArr2 = arr2.sort();
	for (let i = 0; i < sortedArr1; i++) {
		if (sortedArr1[i] !== sortedArr2[i]) return false;
	}
	return true;
};
