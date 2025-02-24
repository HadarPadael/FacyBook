import ContactComponent from "./ContactComponent";

function ContactsList({friends}) {
  
  const contacts = friends.map((contact, key) => {
    return <ContactComponent {...contact} key={key} />;
  });

  return <ul className="list-group">{contacts}</ul>;
}

export default ContactsList;
