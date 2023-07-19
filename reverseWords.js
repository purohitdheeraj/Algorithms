const reverseWord = (word) => {
	let reversedWord = "";
	for (let index = word.length - 1; index >= 0; index--) {
		let char = word[index];
		reversedWord += char;
	}
	return reversedWord;
};

const reverseWords = (text) => {
	// * don't use array.reverse method
	// * each word should be reverse but not string text
	let newWords = [];
	const words = text.split(" ");
	for (let index = 0; index < words.length; index++) {
		let word = words[index];
		newWords.push(reverseWord(word));
	}
	return newWords.join(" ");
};

const result = reverseWords(
	"hare krishna hare krishna krishna krishna hare hare"
);

console.log(result);
