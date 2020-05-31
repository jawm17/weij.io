export default {
    postPhoto: photo => {
        return fetch('/user/post-photo', {
            method: "post",
            body: JSON.stringify(photo),
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