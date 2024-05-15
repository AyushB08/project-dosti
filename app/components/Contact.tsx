import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div id ="contact" className="min-h-screen w-screen bg-dark-blue flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold mt-10">Contact Us</h1>
            <h2 className="text-blue-500 text-xl md:text-2xl mt-5">We'd love to hear your thoughts!</h2>

        
            <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-lg w-4/5">
            <form>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
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

