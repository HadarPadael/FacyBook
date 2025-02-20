import InteractionComponent from "./InteractionComponent";
import MenuComponent from "../../../Navbar/MenuComponent";
import { useState } from "react";

function InteractionsList() {
  const [isLiked, setLike] = useState(false);

  const handleLike = (event) => {
    setLike(!isLiked);
  };

  const Interactions = [
    {
      icon: isLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up",
      handleClick: handleLike,
    },
    { icon: "bi bi-chat-heart", toggle: "modal", target: "#CommentsModal", },
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
