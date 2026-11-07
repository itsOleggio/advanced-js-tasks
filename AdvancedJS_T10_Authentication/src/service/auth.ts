import axios from "axios";

export async function auth(login: string, password: string) {
  try {
    const response = await axios.post("http://localhost:7070/auth", {
      login,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function checkAuth(token: string) {
  try {
    const response = await axios.get("http://localhost:7070/private/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
