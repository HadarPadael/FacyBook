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
    const response = await fetch(`http://localhost:12345/api/users/${formData.username}`, {
      method: "GET"
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }
}
