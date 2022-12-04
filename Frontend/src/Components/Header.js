import '../App.css';
import {useState} from "react";
import logoImage from '../assets/butter.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    let classNameDependsOnCondtion = isOpen === false ? "hidden" : "";
    return (
        <nav className="bg-white border-gray-200 sticky top-0 w-full px-2 sm:px-4 py-2 bg-green">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <img className="mx-4" src={logoImage} alt="PBC logo image: butter" width="30px" height="30px"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-light-gray">PBC</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-light-gray rounded-lg md:hidden hover:bg-light-green focus:outline-none focus:ring-2 focus:ring-light-green dark:text-light-gray dark:hover:bg-light-green dark:focus:ring-light-green"
                        aria-controls="navbar-default" aria-expanded="false" onClick={toggleNavbar}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto navbar-default" id="navbar-default ${classNameDependsOnCondtion}`}>
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-light-green md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#"
                               className="block py-2 pr-4 pl-3 text-light-gray bg-light-green rounded md:p-2 dark:text-white"
                               aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#" 
                               className="block py-2 pr-4 pl-3 text-light-gray rounded hover:bg-light-green md:border-0 md:p-2 dark:text-light-gray">Services</a>
                        </li>
                        <li>
                            <a href="#contact"
                               className="block py-2 pr-4 pl-3 text-light-gray rounded hover:bg-light-green md:border-0 md:p-2 dark:text-light-gray"
                               area-current="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;