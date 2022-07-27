import { Link } from "react-router-dom";
import EditForm from "./EditForm";

const ContactDetails = (props) => {
    return (
        <section className="bg-white h-boxHeight w-96 mx-auto my-10 shadow relative rounded-lg">
            <Link to='/contacts'>
                <div className="flex justify-start h-28 bg-primary text-white items-center
             pl-8 pb-4 cursor-pointer relative rounded-t-lg">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    <h3 className="text-white uppercase text-lg ml-2">Contacts</h3>
                </div>
            </Link>
            <div className="flex justify-center items-center absolute top-20 left-10">
                <img className="w-24 h-24 object-cover rounded-md shadow"
                    src={props.image} alt={props.name} />
                <div className="ml-4 mt-2">
                    <p className="text-gray-700">{props.name}</p>
                    <p className="text-gray-500 text-sm">{props.email}</p>
                </div>
            </div>
            <EditForm
                name={props.name}
                image={props.image}
                id={props.id}
                email={props.email}
            />
        </section>
    );
};

export default ContactDetails;