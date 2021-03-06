export default {
    getUserInfo: () => {
        return fetch('/user/info')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
    getUserPosts: () => {
        return fetch('/user/posts')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
    //search query from searchbar
    getUsers: (query) => {
        return fetch('/user/query/users', {
            method: "post",
            body: JSON.stringify(query),
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
    getOtherUserInfo: (user) => {
        return fetch('/user/' + user)
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
    followUser: (user) => {
        return fetch('/user/follow', {
            method: "post",
            body: JSON.stringify({ "username": user }),
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
    unfollowUser: (user) => {
        return fetch('/user/unfollow', {
            method: "post",
            body: JSON.stringify({ "username": user }),
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
    getFeed: () => {
        return fetch('/user/feed')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "Unauthorized", msgError: true } };
            });
    },
    updateBalance: (funds) => {
        return fetch('/user/update-balance', {
            method: "post",
            body: JSON.stringify({ "funds": funds }),
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
    updateNumTx: (numTx) => {
        return fetch('/user/update-NumTx', {
            method: "post",
            body: JSON.stringify({ "numTx": numTx }),
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
    getInfoByID: (id) => {
        return fetch('/user/infoByID', {
            method: "post",
            body: JSON.stringify({ "id": id }),
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