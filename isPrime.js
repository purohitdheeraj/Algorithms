// basic iterative method

const isPrime = (num) => {
	if (num <= 1) return false;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

const sieveOfEratosthenes = (num) => {
	let arr = Array(num).fill(true);
	arr
	const sqrRoot = Math.trunc(num ** (1 / 2));

	arr[0] = false;
	arr[1] = false;

	for (let i = 2; i < sqrRoot; i++) {
		i
		for (let j = 2; i * j <= num; j++) {
			k = i*j
			console.log(k)
			arr[i * j] = false;
		}
	}

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			result.push(i);
		}
	}

	return result;
};

console.log(sieveOfEratosthenes(20));
