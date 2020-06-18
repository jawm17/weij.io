export default {
    tipTx: (funds, to, from) => {
        return fetch('/user/tipTx', {
            method: "post",
            body: JSON.stringify({ "funds": funds, "to": to, "from": from, "date": Date.now()}),
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