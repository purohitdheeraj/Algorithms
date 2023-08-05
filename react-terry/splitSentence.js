export const splitSentence = (sentence) => {
	// Write your code here
	const wordsArr = [];

	let tempWord = "";

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i];
		if (char === " ") {
			wordsArr.push(tempWord);
			tempWord = "";
		} else {
			tempWord += char;
		}
	}
	wordsArr.push(tempWord);

	return wordsArr;
};
