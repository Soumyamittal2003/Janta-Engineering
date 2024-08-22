import React, { useState, useEffect } from "react";

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        "This service is fantastic! Highly recommend it to everyone.",
        "Great experience, very professional, and on time.",
        "I'm impressed with the quality and attention to detail.",
        "Best decision I made this year, amazing results!",
        "Customer support was top-notch, helped me with everything.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 7000); // 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="bg-gray-200 py-10 flex justify-center items-center">
            <div className="w-full max-w-3xl text-center ">
                <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
                <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
                <div
                    className="h-500 relative overflow-hidden rounded-lg flex items-center justify-center p-8 transition-transform duration-1000 ease-out"
                >
                    <p className="text-lg italic">
                        {testimonials[currentTestimonial]}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
