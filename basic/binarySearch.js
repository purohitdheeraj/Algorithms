// target element, dividing the input size by half
// middle element
// performant O(log n)
// recursive way

// * Recursion
// factorial

const getFactorial = (num) => {
	if (num <= 2) {
		// one extra function call
		// base case
		return num;
	} else {
		// recursive case
		return num * getFactorial(num - 1); // recursive step (num - 1) ** very imp
	}
};

function binarySearch(numArr, key) {
	let middleIndex = Math.floor(numArr.length / 2);
	let middleElement = numArr[middleIndex];

	// base case
	if (middleElement === key) return true;
	// RC
	else if (middleElement < key && numArr.length > 1) {
		console.log(middleElement);
		return binarySearch(
			numArr.slice(middleIndex, numArr.length),
			key
		);
		// RC
	} else if (middleElement > key && numArr.length > 1) {
		console.log(middleElement);
		return binarySearch(numArr.slice(0, middleIndex), key);
	} else return false;
}

a = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 36);
console.log(a);
