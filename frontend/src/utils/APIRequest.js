function getToken() {
  const authUser = localStorage["_authuser"];
  return authUser ? JSON.parse(authUser).userData.token : "";
}

const encodeFormData = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

async function PostWithAuth(route, data) {
  return fetch(`https://team-trion.herokuapp.com${route}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify(data)
  });
}

async function getWithAuth(route) {
  return fetch(`https://team-trion.herokuapp.com${route}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    }
  });
}

async function putWithAuth(route, data, method) {
  return fetch(`https://team-trion.herokuapp.com${route}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": method || "application/json",
      Authorization: "Bearer " + getToken()
    },
    body:
      method === "application/x-www-form-urlencoded"
        ? encodeFormData(data)
        : JSON.stringify(data)
  });
}

async function signIn({ username, password }) {
  return new Promise(async resolve => {
    try {
      const response = await fetch("https://team-trion.herokuapp.com/login/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      let { status } = response;
      const data = await response.json();

      if (status === 201 || status === 200) {
        const { token } = data;
        const payload = {
          isLoggedIn: true,
          userData: {
            username,
            token
          }
        };
        resolve(payload);
      }
    } catch (error) {}
  });
}

export { PostWithAuth, getWithAuth, signIn, putWithAuth };
