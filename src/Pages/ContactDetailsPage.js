import { useParams } from "react-router";
import { useSelector } from "react-redux/es/exports";
import ContactDetails from "../components/ContactDetails";

const ContactDetailsPage = () => {
    const contactsList = useSelector(state => state.contactList);

    const params = useParams();
    const { id } = params;

    const ContactDetail = contactsList.find(contact => id === contact.id)


    return (
        <ContactDetails
            name={ContactDetail.name}
            email={ContactDetail.email}
            image={ContactDetail.image_src}
            id={ContactDetail.id}
        />
    );

};

export default ContactDetailsPage;