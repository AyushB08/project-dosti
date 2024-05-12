"use client"

import Image from "next/image";
import "./HomeStyles.css";
export default function Home() {

  const testimonials = [
    { content: 'Testimonial 1 content', author: 'Testimonial 1 Author' },
    { content: 'Testimonial 2 content', author: 'Testimonial 2 Author' },
    // Add more testimonials as needed
  ];

  return (
    <>
      <div className="h-screen w-screen bg-dark-blue flex items-center justify-center">
        <div className=" mx-10 p-6 flex flex-col md:flex-row  items-center space-y-20 md:space-y-0">
          <div className="mt-6 mr-6">
            <h1 className="text-white text-5xl md:text-8xl font-bold mb-2">Together, we make a change</h1>
            <p className="text-gray-300 text-xl">Explore amazing features and services.</p>
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
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold">Our Impact</h2>
          <ul className="mt-4 text-xl">
            <li>Improved access to education</li>
            <li>Community health initiatives</li>
            <li>Environmental sustainability programs</li>
            <li>Support for vulnerable populations</li>
          </ul>
        </div>
      </div>
      <div className="h-screen w-screen bg-white  flex-col md:flex-row md:hidden">
      
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold">Our Impact</h2>
          <ul className="mt-4 text-sm w-screen">
            <li className="left-list w-3/4 my-5 py-5 text-white "><p className="mx-4">Partner with Firms and Collected E-Waste, and use it to setup Computer Learning Centers To Create Communal Impact</p></li>
            <li className="right-list  w-3/4  my-5 py-5 text-white  "><p className="mx-4">700+ People Impacted</p></li>
            <li className="left-list w-3/4 my-5 py-5 text-white "><p className="mx-4">Developed A Multilingual E-Learning Platform Using AI Integration</p></li>
            <li className="right-list  w-3/4  my-5 py-5 text-white  "><p className="mx-4">2000+ Students</p></li>
            <li className="left-list w-3/4 my-5 py-5 text-white "><p className="mx-4">Setting up PCs and other equipment required for creating a computer lab in underprivileged schools</p></li>
            <li className="right-list  w-3/4  my-5 py-5 text-white  "><p className="mx-4">20+ Hardware Donated</p></li>
            <li className="left-list w-3/4 my-5 py-5 text-white "><p className="mx-4">Distributing our E-Learning software to schools Nationally and Scale Our Impact to Lakhs</p></li>
            <li className="right-list  w-3/4  my-5 py-5 text-white  "><p className="mx-4">Integrated With 8 Schools</p></li>
           
          
          </ul>
        </div>
      </div>

      <div className="h-screen w-screen bg-navy">
       
      </div>
    </>
  );
}
