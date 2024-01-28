import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Richard Gonzales",
      testimonial:
        "The car toys from PixiePlay are amazing! My kids love playing with them. The quality is top-notch, and the attention to detail is impressive. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
      id: 2,
      name: "Bella Johnston",
      testimonial:
        "I recently purchased a car toy from PixiePlay, and I'm extremely satisfied with my purchase. The toy is durable, and the design is fantastic. My child can’t stop playing with it!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 3,
      name: "David Smith",
      testimonial:
        "The car toys from PixiePlay are incredible! The level of craftsmanship is outstanding, and the attention to detail is exceptional. My children enjoy playing with them for hours on end. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation will trigger only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <div className="flex items-center">
                  <p className="font-semibold font-mono text-lg">
                    Rating:{" "}
                    <Rating
                      title={testimonial.rating}
                      initialRating={testimonial.rating}
                      readonly
                      placeholderSymbol={<FaStar className="icon" />}
                      fullSymbol={<FaStar color="#FFD700" className="icon" />}
                      emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                    />
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              <q className="italic font-mono">{testimonial.testimonial}</q>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
