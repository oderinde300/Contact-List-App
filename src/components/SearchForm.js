import { useRef } from "react";
import { useDispatch } from "react-redux";
import { contactActions } from "../store/contact-slice";

const SearchForm = () => {
    const searchInputRef = useRef();
    const dispatch = useDispatch();

    const searchTermHandler = () => {
        const enteredSearch = searchInputRef.current.value;
        dispatch(contactActions.serchTermHandler(enteredSearch));
    };



    return (
        <div className="border rounded-full shadow-md absolute top-20 left-8 bg-white w-80">
            <form className="flex justify-between items-center px-4 py-2 ">
                <input type='text' placeholder="Search Contact" className="outline-none"
                    onChange={searchTermHandler}
                    ref={searchInputRef}
                />
                <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;