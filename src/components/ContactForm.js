import React from 'react';

const ContactForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-xl font-semibold text-gray-700">&times;</button>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="your name"
                            className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="your email"
                            className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium "></label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="message"
                            rows="4"
                            className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500 placeholder-gray-950"
                        />
                    </div>
                    <div className="flex justify-end pt-6">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                        
                            Send
                        </button>
                        
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 mr-6 text-4xl font-bold text-gray-950 hover:text-gray-600"
                    >
                        &times;
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
