import ContactComponent from "./ContactComponent";

const Contacts = [{ profilePic: "/profilePic.jpg", friendName: "friend name" }];

const ContactsList = Contacts.map((contact, key) => {
    return <ContactComponent {...contact} key={key}/>;
});

export default ContactsList