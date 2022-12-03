const link =
  "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=AJNUI74A3Q7ASVN6J7EKG6NBZSBSCP8X14";

const fetchData = async () => {
  const result = await fetch(link);
  const data = await result.json();

  const {
    result: {suggestBaseFee, SafeGasPrice, ProposeGasPrice, FastGasPrice}
  } = data

  const total = [suggestBaseFee, SafeGasPrice, ProposeGasPrice, FastGasPrice]
};

fetchData();

module.exports = {
    fetchData
  }