export default function Impact() {
    return (
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
    )
    
}