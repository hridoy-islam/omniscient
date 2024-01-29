// Utility function to convert any currency to BTC
export const currencyConvert = (amount: number, exchangeRate: number) => {
  try {
    // Perform the conversion
    const btcAmount = amount / exchangeRate;

    // Round to 8 decimal places
    const roundedBTC = Number(btcAmount.toFixed(8));

    return roundedBTC;
  } catch (error: any) {
    throw new Error(`Conversion failed: ${error.message}`);
  }
};
