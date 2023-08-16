const bucketSort = (arr) => {
	const freqCount = [];
	const result = [];

	arr.forEach((item) => {
		if (freqCount[item]) {
			freqCount[item][1]++;
		} else {
			freqCount[item] = [item, 1];
		}
	});

	let filteredCount = freqCount.filter((item) => item);

	let flatArrCount = filteredCount.reduce((acc, curr) => {
		return Array.isArray(curr) ? [...acc, ...curr] : acc;
	}, []);

	for (let i = 1; i < flatArrCount.length; i = i + 2) {
		let freq = flatArrCount[i];
		let num = flatArrCount[i - 1];
		for (let i = 0; i < freq; i++) {
			result.push(num);
		}
	}

	// for (let i = 0; i < freqCount.length; i++) {
	// 	let item = freqCount[i];
	// 	if (item) {
	// 		let [num, count] = item;
	//     result.push(num)
	// 	}
	// }

	return result;
};

console.log(
	bucketSort([2, 2, 3, 3, 6, 7, 8, 8, 8, 9, 9, 9, 2])
);



const bucketSort1 = (arr) => {
  const freqCount = {};

  // Step 1: Create frequency count using an object
  for (const item of arr) {
      freqCount[item] = (freqCount[item] || 0) + 1;
  }

  const result = [];

  // Step 2: Iterate through frequency count to generate sorted result
  for (const [num, freq] of Object.entries(freqCount)) {
      for (let i = 0; i < freq; i++) {
          result.push(parseInt(num));
      }
  }

  return result;
};

const sortedArray = bucketSort([2, 2, 3, 3, 6, 7, 8, 8, 8, 9, 9, 9, 2]);
console.log(sortedArray);
