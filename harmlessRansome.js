// if we can build the sentence note from magazine text then return true
// else false

/*
  @inputNote<str>
  @magazine<str>
**/

function harmlessRansomNote(inputNote, magazine) {
	// iterate the inputNote
	// check for each word if it is present in magazine
	// t or f
	const notesArr = inputNote.split(" ");
	const magazineArr = magazine.split(" ");
	for (let i = 0; i < notesArr.length; i++) {
		let word = notesArr[i];
		if (!magazineArr.includes(word)) {
			return false;
		}
	}
	return true;
}

function harmlessRansomNoteHashTable(inputNote, magazine) {
	const notesArr = inputNote.split(" ");
	const magazineArr = magazine.split(" ");
	const magazineObj = Object.create({});
	// got the dict count for magazine words
	// O(n)
	magazineArr.forEach((word) => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	magazineObj;

	// basic iteration to check whether word exist in obj or not
	// O(n)
	for (let i = 0; i < notesArr.length; i++) {
		let word = notesArr[i];
		if (!magazineObj[word]) return false;
	}

	// O(n+n) => O(n)
	return true;
}

function harmlessRansomNoteHashTable1(inputNote, magazine) {
	const notesArr = inputNote.split(" ");
	const magazineArr = magazine.split(" ");
	const magazineObj = Object.create({});

	magazineArr.forEach((word) => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	let notesIsPossible = true;
	magazineObj;
	notesArr.forEach((word) => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) notesIsPossible = false;
		} else notesIsPossible = false;
	});

	return notesIsPossible;
}

console.log(
	harmlessRansomNoteHashTable(
		`hare krishna`,
		`hare rama hare rama rama rama hare hare 
    hare krishna hare krishna krishna krishna hare hare`
	)
);

console.log(
	harmlessRansomNoteHashTable1(
		`this is a secret note for you from a secret admirer`,
		`this is a secret note for you from a  admirer`
	)
);
