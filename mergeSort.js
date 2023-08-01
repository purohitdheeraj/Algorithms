// mergeSort -> divide the arr in 2 half
// merge -> takes 2 arr and merge into one and return 

function mergeSort(array){
	// base case -> [0] [1]
	if(array.length < 2) return array;
	let middleIndex = Math.floor(array.length / 2)
	let firstHalf = array.slice(0, middleIndex)
	let secondHalf = array.slice(middleIndex)
	// divide the array and pass
	array
	return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(array1, array2){
	let result = []
	while(array1.length && array2.length){
		let minElement;
		if(array1[0] < array2[0]){
			minElement = array1.shift()
		}else{
			minElement = array2.shift()
		}
		result.push(minElement)
	}
	result
	if(array1.length) result =  result.concat(array1)
	else result = result.concat(array2)
	return result
}


console.log(mergeSort([11,2,43,9,33,22,44,32,11]))