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

  static async deletePost(nickname, postID, token) {
    const response = await fetch(
      `http://localhost:12345/api/posts/${nickname}/posts/${postID}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }

  static async updateLikes(name, postID, likes) {
    const response = await fetch(
      `http://localhost:12345/api/posts/${name}/posts/${postID}/likes`,
      {
        method: "PATCH",
        body: JSON.stringify({ likes }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  }
}