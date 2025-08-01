// Buy total calculator
document.addEventListener("DOMContentLoaded", function () {
  const buyDollarInput = document.getElementById("buyDollar");
  const buyTotalInput = document.getElementById("buyTotal");

  if (buyDollarInput && buyTotalInput) {
    buyDollarInput.addEventListener("input", function () {
      const dollarAmount = parseFloat(buyDollarInput.value);
      if (!isNaN(dollarAmount)) {
        buyTotalInput.value = (dollarAmount * 129).toFixed(2) + " BDT";
      } else {
        buyTotalInput.value = "";
      }
    });
  }

  // Sell total calculator
  const sellDollarInput = document.getElementById("sellDollar");
  const sellTotalInput = document.getElementById("sellTotal");

  if (sellDollarInput && sellTotalInput) {
    sellDollarInput.addEventListener("input", function () {
      const dollarAmount = parseFloat(sellDollarInput.value);
      if (!isNaN(dollarAmount)) {
        const total = dollarAmount * 121 - 5;
        sellTotalInput.value = total.toFixed(2) + " BDT (5৳ less)";
      } else {
        sellTotalInput.value = "";
      }
    });
  }
});
