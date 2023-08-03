const maxStockProfit = (arr) => {
  let maxProfit = -1
  let sellPrice = 0
  let buyPrice = 0

  let changeBuyPrice = true

  for(let i=0; i < arr.length - 1; i++){
    if (changeBuyPrice) buyPrice = arr[i]
    sellPrice = arr[i+1]


    if(sellPrice < buyPrice){
      changeBuyPrice = true
    }else{
      let tempProfit = sellPrice - buyPrice
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false
    }

  }

  return maxProfit
}


console.log(maxStockProfit([11,40,2,23,74,98,21,32]))