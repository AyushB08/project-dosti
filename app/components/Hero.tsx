export default function Hero() {   
    return (
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
    )
}