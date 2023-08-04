const maxStockProfit = (arr) => {
	let maxProfit = -1;
	let sellPrice = 0;
	let buyPrice = 0;

	let changeBuyPrice = true;

	for (let i = 0; i < arr.length - 1; i++) {
		if (changeBuyPrice) buyPrice = arr[i];
		sellPrice = arr[i + 1];

		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		} else {
			let tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) maxProfit = tempProfit;
			changeBuyPrice = false;
		}
	}

	return maxProfit;
};

const maxStockProfit1 = (arr) => {
	let maxProfit = -1;
	let buyPrice = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let sellPrice = arr[i];
		let tempProfit = sellPrice - buyPrice;

		if (tempProfit > maxProfit) {
			maxProfit = tempProfit;
		}
		if (sellPrice < buyPrice) {
			buyPrice = sellPrice;
		}
	}

	return maxProfit;
};

console.log(
	maxStockProfit1([11, 40, 2, 23, 74, 98, 21, 32])
);

console.log(maxStockProfit1([4,3,2,1,8]))
