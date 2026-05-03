const baseUrl = "https://api.freeapi.app/api/v1/users";

export const registerUser = async function (data) {
  try {
    const res = await fetch(`${baseUrl}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const loginUser = async function (data) {
  try {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let json = await res.json();
    return json;
  } catch (error) {
    console.log(error);

    return {};
  }
};
export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${baseUrl}/current-user`, {
      method: "GET",
    });

    let json = await res.json();
    return json;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch(`https://api.freeapi.app/api/v1/users/logout`, {
      method: "POST",
    });
    let json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return {};
  }
};
