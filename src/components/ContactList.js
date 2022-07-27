import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";
import SearchForm from "./SearchForm";

const ContactList = () => {
    const contactsList = useSelector(state => state.contactList)
    const searchResult = useSelector(state => state.searchReasult)
    const isSearching = useSelector(state => state.isSearching)

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (isSearching) {
            setContacts(searchResult)
        } else {
            setContacts(contactsList)
        }
    }, [contactsList, searchResult, isSearching])

    const contactItem = contacts.map(contact => {
        return <ContactItem
            key={contact.id}
            name={contact.name}
            email={contact.email}
            image={contact.image_src}
            id={contact.id}
        />
    })

    const onClick = (contacts) => {
        setContacts(contacts)
    };

    return (
        <section className="card">
            <div className="flex justify-center h-24 bg-primary items-center ">
                <h3 className="text-white uppercase text-lg">Contacts</h3>
            </div>
            <SearchForm
                onClick={onClick}
            />
            <div className="mt-8 h-80 overflow-y-scroll">
                {contactItem}
            </div>
            <Link to='/add-contact'>
                <button className="bg-primary w-12 h-12 rounded-full text-2xl text-white flex justify-center items-center text-center 
                        absolute bottom-4 right-5 cursor-pointer shadow-xl" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button >
            </Link>
        </section >
    );
};

export default ContactList;