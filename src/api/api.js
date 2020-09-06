export async function getStock(data) {
    const response = fetch(`${process.env.REACT_APP_API_URL}/stock`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return (await response).json();
}

export async function getTickers() {
    const response = fetch(`${process.env.REACT_APP_API_URL}/tickers`);

    return (await response).json();
}