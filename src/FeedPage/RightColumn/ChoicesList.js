import ChoiceComponent from "./ChoiceComponent";

const Choices = [
  { icon: "bi bi-people-fill", category: "Friends" },
  { icon: "bi bi-clock-history", category: "Memories" },
  { icon: "bi bi-bookmark-fill", category: "Saved" },
  { icon: "bi bi-person-arms-up", category: "Groups" },
  { icon: "bi bi-skip-end-btn-fill", category: "Videos" },
  { icon: "bi bi-shop-window", category: "MarketPlace" },
  { icon: "bi bi-postcard-heart-fill", category: "Feeds" },
];

const ChoicesList = Choices.map((choice, key) => {
    return <ChoiceComponent {...choice} key={key}/>;
});

export default ChoicesList;
