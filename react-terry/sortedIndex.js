// will insert the value to keep the arr sorted

let arr = [1, 2, 4, 5, 6];
let value = 3;

console.log(getSortedIndex(arr, value));

function getSortedIndex(arr, value) {
	let low = 0;
	let high = arr.length;

	while (low < high) {
		let mid = Math.floor((low + high) / 2);
		if (arr[mid] < value) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return low;
}
