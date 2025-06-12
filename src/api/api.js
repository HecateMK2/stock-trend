import yahooFinance from 'yahoo-finance2';

export async function getStock(data) {
    const { ticker, from, to } = data;
    const queryOptions = {
        period1: from,
        period2: to,
    };
    const result = await yahooFinance.historical(ticker, queryOptions);
    return result;
}

export async function getTickers() {
    // This is a placeholder function.
    // You will need to implement your own ticker search functionality.
    return [
        { value: 'AAPL', label: 'Apple' },
        { value: 'GOOG', label: 'Google' },
        { value: 'MSFT', label: 'Microsoft' },
        { value: 'AMZN', label: 'Amazon' },
        { value: 'TSLA', label: 'Tesla' },
    ];
}