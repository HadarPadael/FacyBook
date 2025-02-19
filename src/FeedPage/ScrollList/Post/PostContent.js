function PostContent({ postPic, content }) {
  return (
    <div>
      <img id="postImage" src={postPic} className="card-img-top" />
      <p id="postText" className="card-text">
        {content}
      </p>
    </div>
  );
}

export default PostContent;
