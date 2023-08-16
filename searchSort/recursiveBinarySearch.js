const recursiveBinarySearch = (
	arr,
	value,
	lowerBound = 0,
	upperBound = arr.length
) => {
	let midIndex = Math.floor((lowerBound + upperBound) / 2);
	let middleItem = arr[midIndex];

	if (lowerBound > upperBound) {
		return -1;
	}

	if (middleItem === value) {
		return midIndex;
	}

	if (middleItem < value) {
		return recursiveBinarySearch(
			arr,
			value,
			midIndex + 1,
			upperBound
		);
	}

	if (middleItem > value) {
		return recursiveBinarySearch(
			arr,
			value,
			lowerBound,
			midIndex - 1
		);
	}

	return -1;
};

console.log(recursiveBinarySearch([3, 2, 1, 0], 3));
