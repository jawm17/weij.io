export default {
    getComments: (imgSrc) => {
        return fetch('/media/comments', {
            method: "post",
            body: JSON.stringify({ "photoID": imgSrc }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
}