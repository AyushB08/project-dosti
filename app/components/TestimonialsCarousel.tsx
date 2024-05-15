import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        name: "User 1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: ""
    },
    {
        name: "User 2",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        image: ""
    },
    {
        name: "User 3",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        image: "" 
    },
];

const responsive = {
    
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function TestimonialsCarousel() {
    return (
        <div className="w-4/5 md:w-4/5 mx-auto p-4 text-center">
            <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={3000}
                className="relative mt-10 md:mt-20"
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-lg mx-2 h-full md:w-auto">
                        {testimonial.image ? (
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        ) : (
                            <FontAwesomeIcon icon={faUserCircle} className="w-24 h-24 text-gray-400 mx-auto mb-4"/>
                        )}
                        <p className="text-lg italic ">"{testimonial.text}"</p>
                        <p className="mt-4 font-semibold text-blue-500">{testimonial.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
