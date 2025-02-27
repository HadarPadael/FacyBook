import ContactComponent from "./ContactComponent";

function ContactsList({friends}) {
  
  const contacts = friends.map((contact, index) => {
    return <ContactComponent name={contact} index={index} />;
  });

  return <ul className="list-group">{contacts}</ul>;
}

export default ContactsList;
