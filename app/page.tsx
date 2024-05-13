"use client"

import Image from "next/image";

import TeamItem from "./components/TeamItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {

  const teamMembers = [
    { name: 'Aarna Rajvansh', role: 'Social Media', imageUrl: '/images/image1.png' },
    { name: 'Abhijay Parija', role: 'Hardware', imageUrl: '/images/image2.png' },
    { name: 'Ahaan Anand', role: 'Social Media', imageUrl: '/images/image3.png' },
    { name: 'Devika Gupta', role: 'Social Media', imageUrl: '/images/image4.png' },
    { name: 'Aarna Rajvansh', role: 'Social Media', imageUrl: '/images/image5.png' },
    { name: 'Karan Raj', role: 'Project Lead', imageUrl: '/images/image6.png' },
    { name: 'Mannomay Gupta', role: 'Hardware', imageUrl: '/images/image7.png' },
    { name: 'Ranveer Kapoor', role: 'Research Head', imageUrl: '/images/image8.png' },
    { name: 'Reet Sehra', role: 'Fundraising', imageUrl: '/images/image9.png' },
    { name: 'Sparsh Ranjan', role: 'Software', imageUrl: '/images/image10.png' },
    { name: 'Suhaan Khurana', role: 'Project Lead', imageUrl: '/images/image11.png' },
    { name: 'Vansh Bhalla', role: 'Graphics', imageUrl: '/images/image12.png' },
   
  ];

  return (

    
    <>
      
      <Navbar
					pages={
						new Map([
							["/", "Home"],
							["#projects", "Projects"],
							["#team", "Team"],
              				["#contact", "Contact"]
						])
					}
				/>
      <div id="/" className="h-screen w-screen bg-dark-blue flex items-center  justify-center">
        <div className=" mx-10 p-6 flex flex-col md:flex-row  items-center space-y-20 md:space-y-0">
          <div className="mt-6 mr-6">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">Together, We Build a Brighter Tomorrow</h1>
            <p className="text-gray-300 text-xl">Welcome to Project Dosti, a nonprofit dedicated to uplifting communities.</p>
            <div className="flex flex-row space-x-5 mt-5 items-center text-white">
              <p className="bg-navy py-2 md:py-5 px-10 rounded-full">Donate</p>
              <p className="bg-navy py-2 md:py-5 px-10 rounded-full ">Contact Us</p>
            </div>
          </div>
          <div className="rounded-full overflow-hidden  md:w-3/4 bg-white ">
            <img
              src="/images/happy-family.png"
              alt="Image Description"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-white  flex-col md:flex-row hidden md:flex">
        <div className="w-full  md:w-1/2  bg-blue-500 flex flex-col justify-center items-center">
       
          <div className="bg-blue-900 w-4/5 min-w-64  h-2/5 rounded-lg mt-2 m-2"></div>
          <div className="bg-blue-900 w-4/5 h-2/5 rounded-lg mt-2 m-2"></div>
        
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center" >
          <h2 className="text-5xl font-bold text-blue-500 mb-20">Our Impact</h2>
            
            <p className="font-bold text-5xl">700</p>
            <p className="mb-5 text-navy">People</p>
            <p className="font-bold text-5xl">2000</p>
            <p className="mb-5  text-navy">Students</p>
            <p className="font-bold text-5xl">20</p>
            <p className="mb-5  text-navy">Hardware Donated</p>
            <p className="font-bold text-5xl">8</p>
            <p className="mb-5 text-navy">Schools Partnered With</p>
        </div>
      </div>
      <div className="h-screen w-screen bg-white  flex-col md:flex-row md:hidden">
      
        <div className="w-full h-full md:w-1/2 p-10 flex flex-col justify-center items-center">
          <h2 className="text-7xl font-bold text-blue-500">Our Impact</h2>

          <div className="w-full h-1/2 flex flex-row items-center justify-center space-x-28 mt-20">
              <div className="flex flex-col items-center">
                <p className=" font-bold text-7xl">700</p>
                <p className="mb-5 text-2xl text-navy">People</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-7xl">2000</p>
                <p className="mb-5 text-2xl text-navy ">Students</p>
              </div>
          </div>
          <div className="w-full h-1/2 flex flex-row items-center justify-center space-x-32">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-7xl">20</p>
                <p className="mb-5 text-2xl text-navy text-center">Hardware Donated</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-7xl ">8</p>
                <p className="mb-5 text-2xl text-navy text-center">School Partners</p>
              </div>
          </div>
          
        </div>
      </div>

      <div className="h-screen w-screen bg-dark-blue flex flex-col items-center justify-center">
      <p className="text-white text-8xl mx-10 text-center">Still Don&apos;t Believe Us?</p>


        <p className="text-blue-500 text-2xl ">Listen to our supporters.</p>
        
      </div>

      <div id="projects" className="h-screen w-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-5xl text-blue-500 font-bold">Our Projects</h1>
        <div className="max-w-6xl mx-auto">
          <section className="mb-8">
            
            
          </section>
          <section className="mb-8 mx-10">
            <h2 className="text-2xl font-semibold mb-4">PC Distribution</h2>
            <p className="text-md md:text-lg mb-6">
              Donation of PCs to schools in underprivileged areas, like the initial contribution of 4 PCs to a public school in Almora, facilitating digital access for over 300 villagers.
            </p>
          </section>
          <section className="mb-8 mx-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">AI-Driven Learning Platform</h2>
            <p className="text-md md:text-lg mb-6">
              Development of an AI-powered platform to teach essential skills such as coding and financial literacy, set to benefit over 2000 students in collaboration with partners like the Laksh Foundation and Pathways School Noida.
            </p>
          </section>
          <section className="mb-8 mx-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Hardware Collection Drive</h2>
            <p className="text-md md:text-lg mb-6">
              Collection and refurbishment of over 10 computers and various tech gadgets for educational use, in partnership with communities like ATS Hamlet and ATS Village.
            </p>
          </section>
          <section className="mx-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Fundraising Initiatives</h2>
            <p className="text-md md:text-lg mb-6">
              Successful execution of fundraising activities, including bake sales, generating significant funds towards enhancing digital literacy and infrastructure.
            </p>
          </section>
          <a href="/about" className="mx-10 text-blue-600 hover:underline">Learn More &rarr;</a>
        </div>
      </div>


      
        
      <div id="team" className="md:h-screen w-screen bg-blue-500 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold mt-10 md:mt-0">Meet the Team</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-8 mt-8 max-w-6xl mx-auto mb-8 md:mb-0">
          {teamMembers.map((member, index) => (
            <TeamItem key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
          ))}
        </div>
    </div>
      
      <div id ="contact" className="min-h-screen w-screen bg-dark-blue flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl md:text-8xl font-bold ">Contact Us</h1>

       
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
      <Footer />
    </>
  );
}
