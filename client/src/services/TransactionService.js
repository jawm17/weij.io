export default {
    tipTx: (funds, to, from) => {
        return fetch('/user/sendTransaction', {
            method: "post",
            body: JSON.stringify({ "funds": funds, "to": to, "from": from, "type": "tip"}),
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
    },
    unlockTx: (funds, to, from) => {
        return fetch('/user/sendTransaction', {
            method: "post",
            body: JSON.stringify({ "funds": funds, "to": to, "from": from, "type": "unlock"}),
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