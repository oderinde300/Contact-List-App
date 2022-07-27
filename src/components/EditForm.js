import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { contactActions } from "../store/contact-slice";

const EditForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const imageInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value || props.name;
        const enteredEmail = emailInputRef.current.value || props.email;
        const enteredImage = imageInputRef.current.value || props.image;

        const newContactDetails = {
            name: enteredName,
            email: enteredEmail,
            image_src: enteredImage,
            id: props.id
        }
        dispatch(contactActions.editContact(newContactDetails));
        history.push('/contacts')

    }

    return (
        <div className="mt-20 ml-6">
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <input className="block border-b-2 outline-none text-gray-700
                    hover:border-gray-700 active:border-gray-700"
                        id="name" type='text' placeholder="Full Name"
                        ref={nameInputRef}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input className="block border-b-2 outline-none text-gray-700
                    hover:border-gray-700 active:border-gray-700"
                        id="email" type='email' placeholder="@example.com"
                        ref={emailInputRef}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image">Image Src</label>
                    <input className="block border-b-2 outline-none text-gray-700
                    hover:border-gray-700 active:border-gray-700"
                        id="image" type='text' placeholder="Image Address Link"
                        ref={imageInputRef}
                    />
                </div>
                <button className="bg-primary w-12 h-12 rounded-full text-2xl text-white flex justify-center items-center text-center 
                        absolute bottom-2 right-5 cursor-pointer shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default EditForm;