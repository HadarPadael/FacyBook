import CommentComponent from "./CommentComponent";

function CommentsList({ comments }) {
  const commentsL = comments.map((comment, key) => {
    return <CommentComponent {...comment} key={key} />;
  });

  return <ul>{commentsL}</ul>;
}

export default CommentsList;
