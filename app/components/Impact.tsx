import CountUp from 'react-countup';
import Image from 'next/image';

export default function Impact() {
    return (
        <>
            <div className="h-screen max-w-screen bg-white flex-col md:flex-row hidden md:flex">
                
                <div className="w-full md:w-1/2 bg-blue-500 flex flex-col justify-center items-center">
                    <Image src="/images/dosti-image-1.jpg" alt="Dosti Image" width={100} height={100}   className="w-3/5 h-2/5 rounded-lg mt-2 m-2 border-2 border-white" data-aos="fade-down-left"/>
                    <Image src="/images/dosti-image-2.jpg" alt="Dosti Image" width={100} height={100}   className="w-3/5 h-2/5 rounded-lg mt-2 m-2 border-2 border-white" data-aos="fade-up-right"/>
                
                
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center">
                    <h2 className="text-5xl text-center font-bold text-blue-500 mb-20" data-aos="fade-up">Our Impact</h2>
                    <div className="text-center items-center justify-center" data-aos="fade-in" data-aos-delay="400">
                        <p className="font-bold text-5xl">
                            <CountUp end={700} duration={2.5} />
                        </p>
                        <p className="mb-5 text-navy">People</p>
                        <p className="font-bold text-5xl">
                            <CountUp end={2000} duration={2.5} />
                        </p>
                        <p className="mb-5 text-navy">Students</p>
                        <p className="font-bold text-5xl">
                            <CountUp end={20} duration={2.5} />
                        </p>
                        <p className="mb-5 text-navy">Hardware Donated</p>
                        <p className="font-bold text-5xl">
                            <CountUp end={8} duration={2.5} />
                        </p>
                        <p className="mb-5 text-navy">Schools Partnered With</p>
                    </div>
                </div>
            </div>
            <div className="h-screen w-screen bg-white flex flex-col md:hidden">
                <div className="w-full h-full md:w-1/2 p-10 flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold text-blue-500">Our Impact</h2>
                    <div className="w-full h-full grid grid-cols-2 gap-10 mt-32">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-6xl">
                                <CountUp end={700} duration={2.5} />
                            </p>
                            <p className="mb-5 text-2xl text-navy">People</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-6xl">
                                <CountUp end={2000} duration={2.5} />
                            </p>
                            <p className="mb-5 text-2xl text-navy">Students</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-6xl">
                                <CountUp end={20} duration={2.5} />
                            </p>
                            <p className="mb-5 text-2xl text-navy text-center">Hardware Donated</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-6xl">
                                <CountUp end={8} duration={2.5} />
                            </p>
                            <p className="mb-5 text-2xl text-navy text-center">School Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
