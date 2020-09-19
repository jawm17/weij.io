export default {
    updateBio: (bio) => {
        return fetch('/user/update-bio', {
            method: "post",
            body: JSON.stringify({ "bio": bio }),
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
    updateProfileImg: (img) => {
        return fetch('/user/update-profileImg', {
            method: "post",
            body: JSON.stringify({ "profileImg": img }),
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
    updateColor: (color) => {
        return fetch('/user/update-color', {
            method: "post",
            body: JSON.stringify({ "color": color }),
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