export default {
    getEthPrice: () => {
        return fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
            method: "GET",
            headers: {
                "X-CoinAPI-Key": "7658AFD6-48B4-40C9-9494-0105626B3BF8"
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: "Unauthorized" }, msgError: true };
        });
    }
}