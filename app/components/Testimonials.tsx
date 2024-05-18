import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
    return (
        <div className="h-screen w-screen bg-dark-blue flex flex-col items-center justify-center">
            <p className="text-white text-7xl mx-10 text-center" data-aos="fade-down">Still Don&apos;t Believe Us?</p>


            <p className="text-blue-500 text-2xl ">Listen to our supporters.</p>
            <TestimonialsCarousel/>
            
        </div>
    )
    
}