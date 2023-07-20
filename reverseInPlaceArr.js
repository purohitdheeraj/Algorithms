function reverseArrayInPlace(arr) {
	// reverse arr
	// dont push into new arr
	// let i = 0;
	let j = arr.length - 1;
	for (let i = 0; i <= (arr.length - 1) / 2; i++) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		j--;
	}
	return arr;
}

const names = [
	"ram",
	"govind",
	"krishna",
	"shri radhe",
	"jagannath",
	"subhadra mata",
	"balbhadra thakur",
];

console.log(reverseArrayInPlace(names));
