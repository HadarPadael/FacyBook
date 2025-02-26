export default class postAPI {
  static async getPosts(token) {
    const response = await fetch(`http://localhost:12345/api/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }
}