import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: true, // Only animate once
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="bg-gray-200 col-span-2" data-aos="fade-right" data-aos-delay="100">
                    <img src="https://i.ibb.co/z4ZpPbH/image4.jpg" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-left" data-aos-delay="200">
                    <img src="https://i.ibb.co/t2kRDcN/image5.jpg" alt="Image 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-right" data-aos-delay="300">
                    <img src="https://i.ibb.co/55RQ5kW/image6.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-left" data-aos-delay="400">
                    <img src="https://i.ibb.co/yBMrwJX/image7.jpg" alt="Image 4" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-right" data-aos-delay="500">
                    <img src="https://i.ibb.co/QmhhKQZ/image8.jpg" alt="Image 5" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 col-span-2" data-aos="fade-left" data-aos-delay="600">
                    <img src="https://i.ibb.co/j8SjgmY/image9.jpg" alt="Image 6" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 col-span-2" data-aos="fade-right" data-aos-delay="700">
                    <img src="https://i.ibb.co/rQywqTR/image2.jpg" alt="Image 7" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-left" data-aos-delay="800">
                    <img src="https://i.ibb.co/D5h9WMk/imag3.jpg" alt="Image 8" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200" data-aos="fade-right" data-aos-delay="900">
                    <img src="https://i.ibb.co/3M8D6M8/image1.webp" alt="Image 9" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
