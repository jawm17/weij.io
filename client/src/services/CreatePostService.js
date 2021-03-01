export default {
    newPost: post => {
        return fetch('/user/new-post', {
            method: "post",
            body: JSON.stringify(post),
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