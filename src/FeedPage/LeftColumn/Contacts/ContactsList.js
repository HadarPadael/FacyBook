import ContactComponent from "./ContactComponent";

function ContactsList({ friends }) {
  const contacts = friends.map((friend, index) => {
    return <ContactComponent name={friend} key={index} />;
  });

  return <ul className="list-group">{contacts}</ul>;
}

export default ContactsList;
