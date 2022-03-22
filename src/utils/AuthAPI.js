const API_URL = "https://experis-noroff-api.herokuapp.com";
const API_KEY = "2cdf30b3-079f-410a-bfc1-376b65de5b4e";

export const AuthAPI = {
  getUser(username) {
    return fetch(`${API_URL}/translations?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        // Register user if their data is not present in the API
        return !data.length ? this.register(username) : data[0];
      });
  },
  register(username) {
    return fetch(`${API_URL}/translations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({
        username,
        translations: [],
      }),
    }).then(async (response) => {
      if (!response.ok) {
        const { error = "An unknown error occurred" } = await response.json();
        throw new Error(error);
      }
      return response.json();
    });
  },
};
