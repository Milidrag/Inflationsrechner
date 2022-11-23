import '../App.css';
import React from "react";
import logoImage from '../assets/butter2.png';

function Services() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logoImage}
              alt="Picture of a piece of butter with a knife in it."
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Kontaktiere uns für weitere preisbezogene Informationen.</h2>
          </div>
          <form id="contact" className="mt-8 " action="#">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Vorname Nachname"
                />
              </div>
              <div>
                <label htmlFor="text" className="sr-only">
                  Text
                </label>
                <textarea
                  id="text"
                  name="text"
                  maxLength={900}
                  required
                  className="relative block h-96
                  w-full px-3 py-2 text-sm border border-gray-300 
                  placeholder-gray-500 text-gray-900 rounded-b-md 
                  m-0 break-allte
                  focus:border-indigo-500 focus:z-10"
                  placeholder="Deine Anfrage..."
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center items-center 
                mt-6 py-3 px-5 text-base font-medium text-center 
                text-green rounded-lg border-2 border-yellow bg-yellow hover:bg-transparent ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}export default Services;
