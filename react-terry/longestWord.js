const arr = [
	"apple",
	"pear",
	"banana",
	"orange",
	"pineapple",
  "cauliflower"
];

const longestWord = (arr) => {
	if (!arr) return "";
	return arr.reduce((acc, curr) => {
		acc = acc.length < curr.length ? curr : acc;
		return acc;
	}, "");
};

console.log(longestWord(arr));
