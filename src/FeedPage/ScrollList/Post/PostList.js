import PostComponent from "./PostComponent";
import postData from "../mockData/posts.json";

const { posts } = postData;

const PostList = posts.map((post, key) => {
  return <PostComponent {...post} key={key} />;
});

export default PostList;
