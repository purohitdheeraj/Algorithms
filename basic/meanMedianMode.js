function findMean(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let mean = 0;
	for (let i = 0; i < arr.length; i++) {
		mean += arr[i];
	}
	return Math.floor(mean / arr.length);
}

function findMedian(arr) {
	// arrange in ascending order
	if (arr.length === 0) return 0;

	arr.sort((a, b) => a - b);

	// median is middle value
	const middleValue = Math.floor((arr.length - 1) / 2);
	// if even numbers then avg of 2 middle numbers
	if (arr.length % 2 === 0) {
		return (arr[middleValue] + arr[middleValue - 1]) / 2;
	} else {
		return arr[middleValue];
	}
}

function findMode(arr) {
	if (arr.length === 0) return [];
	const freqCount = {};
	arr.forEach((num) => {
		freqCount[num] = (freqCount[num] || 0) + 1;
	});

	let maxFreqCount = 0;
	let modes = [];
	for (let num in freqCount) {
		if (freqCount[num] > maxFreqCount) {
			maxFreqCount = freqCount[num];
			modes = [Number(num)];
		} else if (freqCount[num] === maxFreqCount) {
			modes.push(Number(num));
		}
	}

	if (Object.keys(freqCount).length === modes.length)
		modes = [];
	return modes;
}

function findMeanMedianMode(arr) {
	return {
		mean: findMean(arr),
		median: findMedian(arr),
		mode: findMode(arr),
	};
}

const arr = [1,2,3,4,4,5,6,7,8];

console.log(findMeanMedianMode(arr));
