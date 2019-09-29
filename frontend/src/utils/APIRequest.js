


async function PostWithAuth(route, data) {

    const authUser = JSON.parse(localStorage["_authuser"]);
    const token =  authUser ? authUser.userData.token : "";

    return fetch(`https://team-trion.herokuapp.com${route}`,{
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        },
        body: JSON.stringify(data)
    });
}

async function getWithAuth(route) {

    const authUser = JSON.parse(localStorage["_authuser"]);
    const token =  authUser ? authUser.userData.token : "";

    return fetch(`https://team-trion.herokuapp.com${route}`,{
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    });
}

export{
    PostWithAuth,
    getWithAuth,
} 
