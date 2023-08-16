const binarySearch = (arr, target) => {
	let low = 0;
	let high = arr.length;

	arr = arr.sort((a, b) => a - b);
  
	while (low <= high) {
		
    let midIndex = Math.floor((low + high) / 2);
    let middleItem = arr[midIndex];
    
    if (middleItem === target) {
			return midIndex;
		}

		if (middleItem < target) {
			low = midIndex + 1;
		} else {
			high = midIndex - 1;
		}
	}

	return -1;
};

console.log(binarySearch([10, 15, 4, 19, 8, 3], 13));
