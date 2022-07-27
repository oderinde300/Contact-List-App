import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactActions } from "../store/contact-slice";


const ContactItem = (props) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(contactActions.removeContact(props.id));
    }

    return (
        <div className="flex h-14 items-center border-b border-gray-100">
            <img className="w-11 h-11 rounded-full mx-4 object-cover "
                src={props.image} alt={props.name} />
            <div className="flex flex-col">
                <p className="text-grey-700 leading-none">{props.name}</p>
                <p className="text-gray-500 text-sm">{props.email}</p>
            </div>
            <div className="flex ml-auto mr-3 text-gray-500">
                <Link to={`/contact-details/${props.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </Link>
                <svg onClick={deleteHandler} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    );
};

export default ContactItem;