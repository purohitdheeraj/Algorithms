function isPalindrome(string) {
	// 2 pointer
	// left, right
	// if left not equal right falsewa
	// left++ right--
	// true
	string = string.toLowerCase();
	let left = 0;
	let right = string.length - 1;
	while (left <= right) {
		if (string[left++] !== string[right--]) return false;
	}
	return true;
}



console.log(isPalindrome("123321"));
