const mergeSort = (arr) => {
	if(arr.length < 2) return arr
	let middleIndex = Math.floor(arr.length / 2)
	const arr1 = arr.slice(0, middleIndex)
	const arr2 = arr.slice(middleIndex)

};

const merge = (arr1, arr2) => {
	const mergedArr = [];
	for(let i=0; i<arr1.length; i++){
		if(arr1[i] > arr2[i]){
			mergedArr[i] = arr1.shift()
		}else{
			mergedArr[i] = arr2.shift()
		}
		if(arr2.length){
			mergedArr.push(...arr2)
		}
	}

	return mergedArr;
};


