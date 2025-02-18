import ContactsList from "./ContactsList";

function Contacts() {
  return (
    <div>
      <h4>Contacts</h4>
      <ul className="list-group">{ContactsList}</ul>
    </div>
  );
}

export default Contacts;
