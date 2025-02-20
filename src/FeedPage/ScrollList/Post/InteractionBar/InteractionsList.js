import InteractionComponent from "./InteractionComponent";

const Interactions = [
  { icon: "bi bi-hand-thumbs-up"},
  { icon: "bi bi-chat-heart" },
];

const InteractionsList = Interactions.map((interaction, key) => {
  return <InteractionComponent {...interaction} key={key} />;
});

export default InteractionsList;
