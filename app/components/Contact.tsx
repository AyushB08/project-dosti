import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Contact() {
    const ACCESS_KEY = "";
    const [result, setResult] = React.useState("");


    

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        

        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);
        
        
      
        formData.append("access_key", ACCESS_KEY);
        
        

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id ="contact" className="min-h-screen w-screen bg-dark-blue flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold mt-10">Contact Us</h1>
            <h2 className="text-blue-500 text-xl md:text-2xl mt-5">We&apos;d love to hear your thoughts.</h2>

        
            <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-lg w-4/5" data-aos="flip-left">
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input required type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input required type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea required id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
            </div>

        
            <div className="flex mt-8">
            
            <a href="mailto:info@example.com" className="text-white mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            
            <div className="flex">
                <a href="#" className="text-white mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                </a>
                <a href="#" className="text-white mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                </a>
                <a href="#" className="text-white mr-4 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </a>
            </div>
        
            <div className="flex items-center text-white">
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <span className="ml-2">+1 234 567 890</span>
            </div>
            </div>
        </div>
    )
    
}

