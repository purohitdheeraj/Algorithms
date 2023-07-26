const twoSum = (numArray, sum) => {
	// should return each pair of num which sums to target sum
	const sumArray = [];
	for (let i = 0; i < numArray.length; i++) {
		let num1 = numArray[i];
		for (let j = i + 1; j < numArray.length; j++) {
			let num2 = numArray[j];
			if (num1 + num2 === sum) {
				sumArray.push([num2, num1]);
			}
		}
	}
	return sumArray;
};

// good attempt
// but inefficeincy because of includes
// O(n^2) includes(O(n))
const twoSum1 = (numArray, sum) => {
	let sumArray = [];
	for (let i = 0; i < numArray.length; i++) {
		let num = numArray[i];
		if (numArray.includes(sum - num) && num < sum - num) {
			sumArray.push([num, sum - num]);
		}
	}
	return sumArray;
};

const twoSum2 = (numArray, sum) => {
	let sumArray = [];
	const numMap = new Map();

	for (let i = 0; i < numArray.length; i++) {
		let num = numArray[i];
		let complement = sum - num;

		if (numMap.has(complement)) {
			sumArray.push([num, complement]);
		}

		numMap.set(num, i);
	}

	return sumArray;
};

const twoSum3 = (numArray, sum) => {
	let sumArray = [];
	const hashTable = [];

	for (let i = 0; i < numArray.length; i++) {
		let num = numArray[i];
		let counterPart = sum - num;

		if (hashTable.indexOf(counterPart) !== -1) {
			sumArray.push([num, counterPart]);
		}

    hashTable.push(num)
	}

	return sumArray;
};

const numArray = [1, 6, 4, 5, 3, 3];
const sum = 7;

const result = twoSum3(numArray, sum);
console.log(result);
