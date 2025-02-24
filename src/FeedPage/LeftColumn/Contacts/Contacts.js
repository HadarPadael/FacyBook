import ContactsList from "./ContactsList";

function Contacts({ friends }) {
  return (
    <div>
      <h4 className="contacts">Contacts</h4>
      <ContactsList friends={friends} />
    </div>
  );
}

export default Contacts;
