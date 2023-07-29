// 1, 1, 2, 3, 5, 8, 13, 21, 34

// time complexity (O(2^n))

function fibonacci(position) {
	if (position < 3) return 1;
	else {
		return (
			fibonacci(position - 1) + fibonacci(position - 2)
		);
	}
}

// memoized fibonacci
// memoization

function fibMemo(index, cache) {
	cache = cache || [];
	if (cache[index]) return cache[index];
	else {
		if (index < 3) return BigInt(1);
		else {
			cache[index] =
				fibMemo(index - 1, cache) +
				fibMemo(index - 2, cache);
		}
	}
	return cache[index];
}

let index = 7823;
// console.log(fibMemo(BigInt(index).toString()));
