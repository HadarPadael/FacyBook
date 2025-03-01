import InteractionComponent from "./InteractionComponent";
import MenuComponent from "../../../Navbar/MenuComponent";
import { useState, useContext } from "react";
import postAPI from "../../../../API/postAPI";
import { AuthContext } from "../../../../AuthContext";

function InteractionsList({ comments, postID, name, content, postPic, likes }) {
  const { user } = useContext(AuthContext);
  const loggedName = user.nickname;
  const [isLiked, setLike] = useState(Like());

  const handleLike = async () => {
    try {
      console.log(likes);
      setLike(!isLiked);
      if (isLiked) {
        likes.push(loggedName);
      } else {
        likes = likes.filter((like) => like !== loggedName);
      }
      await postAPI.updateLikes(loggedName, postID, likes);
    } catch (err) {
      console.log(err);
    }
  };

  function Like() {
    return likes.includes(loggedName);
  }

  const Interactions = [
    {
      icon: isLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up",
      handleClick: handleLike,
      comments: comments,
    },
    {
      icon: "bi bi-chat-heart",
      toggle: "modal",
      target: postID,
      comments: comments,
      name: name,
      content: content,
      postPic: postPic,
    },
  ];

  const InteractionsL = Interactions.map((interaction, key) => {
    return <InteractionComponent {...interaction} key={key} />;
  });

  return (
    <div className="row">
      {InteractionsL}
      <div className="col-4 btn btn-light reactionBtn share">
        <MenuComponent
          icon="bi bi-share"
          option1={"Whatsapp"}
          option2={"Email"}
          option3={"Message"}
        />
      </div>
    </div>
  );
}

export default InteractionsList;
