const domain = ""
const handleResponseStatus = (response, errMsg) => {
    const {status, ok} = response;

    if (status === 401) {
        localStorage.removeItem("authToken");
        window.location.reload();
        return;
    }

    if (!ok) {
        throw Error(errMsg);
    }
};

export const login = (credential) => {
    const loginUrl = `${domain}/signin`;
    return fetch(loginUrl, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      if (!response.ok) {
          throw Error("Fail to log in");
      }
      return response.json();     
    })
    .then((token) => {
        localStorage.setItem("authToken",token);
    });
  };

  export const register = (credential) => {
    const registerUrl = `${domain}/signup`;
    return fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      handleResponseStatus(response, "Fail to register");
    });
};