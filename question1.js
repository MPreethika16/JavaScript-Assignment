function formatCurrency(amount, currencyCode) {
  amount = Number(amount).toFixed(2);
  const [real, decimal] = amount.split(".");
  const n = real.length;
  let realstring = "";
  if (currencyCode === "INR") {
    for (let i = n - 1; i >= n - 3; i--) {
      realstring += real[i];
    }
    if (n > 3) realstring += ",";

    let count = 0;
    for (let i = n - 4; i >= 0; i--) {
      count++;
      realstring += real[i];
      if (count === 2 && i !== 0) {
        git;
        realstring += ",";
        count = 0;
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`₹${realstring}.${decimal}`);
  } else if (currencyCode === "USD") {
    let count = 0;
    for (let i = n - 1; i >= 0; i--) {
      realstring += real[i];
      count++;
      if (count === 3 && i !== 0) {
        realstring += ",";
        count = 0;
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`$${realstring}.${decimal}`);
  } else if (currencyCode === "EUR") {
    let count = 0;
    for (let i = n - 1; i >= 0; i--) {
      realstring += real[i];
      count++;
      if (count === 3 && i !== 0) {
        realstring += ".";
        count = 0;
      }
    }
    realstring = realstring.split("").reverse().join("");
    console.log(`€${realstring},${decimal}`);
  } else {
    console.log(`${currencyCode} ${real}.${decimal}`);
  }
}
