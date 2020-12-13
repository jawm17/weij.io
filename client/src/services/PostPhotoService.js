export default {
    postVideo: photo => {
        return fetch('/user/post-video', {
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
    },
    // newPostPhoto: data => {
    //     return fetch('/api/image-upload', {
    //         method: "post",
    //         body: data
    //     }).then(response => {
    //         if (response.status !== 401) {
    //             return response.json().then(data => data);
    //         }
    //         else
    //             return { response , msgError: true };
    //     });
    // },
}