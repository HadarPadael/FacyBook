import PostComponent from "./PostComponent";

function PostList({ posts, message }) {

  const postL = posts.map((post, index) => {
    return <PostComponent {...post} key={index} />;
  });

  return (
    <div>
      {(posts.length == 0) && <h3>{message}</h3>}
      <ul>{postL}</ul>
    </div>
  );
}

export default PostList;
