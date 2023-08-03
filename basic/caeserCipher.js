const caeserCipher = (str, num) => {
	str = str.toLowerCase();
	const alphabets = "abcdefghijklmnopqrstuvwxyz";
	let newString = "";

	for (let i = 0; i < str.length; i++) {
		let currentLetter = str[i];
		if (currentLetter === " ") {
			newString += currentLetter;
			continue;
		}
		let letterIndex = alphabets.indexOf(currentLetter);
		let newIndex = (letterIndex + num) % alphabets.length;
		newString += alphabets[newIndex];
	}

	return newString;
};

const caeserCipher1 = (text, shift) => {
	let lowerCaseString = text.toLowerCase();
	const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
	let newString = ``;
	// to avoid the continuous looping of loop
	shift = shift % 26;

	for (
		let index = 0;
		index < lowerCaseString.length;
		index++
	) {
		let currentLetter = lowerCaseString[index];
		if (currentLetter === " ") {
			newString = `${newString}${currentLetter}`;
			continue; // move with next iteration
		}
		let currentIndex = alphabets.indexOf(currentLetter);

		let newIndex = currentIndex + shift;
		
		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = newIndex + 26;
		
		if (text[index] === text[index].toUpperCase()) {
			newString = `${newString}${alphabet[
				newIndex
			].toUpperCase()}`;
		}
		newString = `${newString}${alphabets[newIndex]}`;
	}

	return newString;
};

const text = "a";
const shift = -4;
const result = caeserCipher1(text, shift);
console.log(result);
