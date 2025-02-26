
export default class userAPI {

  static async createUser(formData) {
    const response = await fetch("http://localhost:12345/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }

  static async userLogin(formData) {
    const response = await fetch("http://localhost:12345/api/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: formData.username }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }

  static async createPost(nickname, token, formData) {
    const response = await fetch(
      `http://localhost:12345/api/users/${nickname}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ formData }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }

  static async getUser(name) {
    const response = await fetch(`http://localhost:12345/api/users/${name}`, {
      method: "GET",
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }
}
