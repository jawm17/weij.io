export default {
    getTransactions: (address) => {
        return fetch(`http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=8AAGX8PGJWQ9WDHYQ5N28SYKZ27ENKJ3VS`)
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
    getUserFromAdress: (address) => {
        return fetch('/user/user-address', {
            method: "post",
            body: JSON.stringify({ address: address }),
            headers: {
                'Content-Type': 'application/json'
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