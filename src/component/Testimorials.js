import React from "react";
import img1 from "../asserts/profile/author1.jpg";
import img2 from "../asserts/profile/author2.jpg";
import img3 from "../asserts/profile/author3.jpg";
import img4 from "../asserts/profile/author4.jpg";
import img5 from "../asserts/profile/author5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ZONATHON DOE",
      position: "CEO & Founder X",
      image: img1,
      testimonial:
        "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
    },
    {
      id: 2,
      name: "MARTIN SMITH",
      position: "CEO & Founder Google",
      image: img2,
      testimonial:
        "Asian planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
    },
    {
      id: 3,
      name: "METHAIL DEV",
      position: "Managing Director - Paydesk",
      image: img3,
      testimonial:
        "Hello planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
    },
    {
      id: 4,
      name: "ELIANA TWEET",
      position: "CEO & Founder Tesla",
      image: img4,
      testimonial:
        "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
    },
    {
      id: 5,
      name: "HENRY CLARK",
      position: "Founder Oxyzen",
      image: img5,
      testimonial:
        "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
    },
  ];

  return (
    <section className="bg-[#F4F3ED] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-16 md:mb-20">
          TESTIMONIALS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F7F7F7] p-8 md:p-10 rounded-lg border border-transparent hover:border-black transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {testimonial.testimonial}
                </p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F7F7F7] p-8 md:p-10 rounded-lg border border-transparent hover:border-black transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {testimonial.testimonial}
                </p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
