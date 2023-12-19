import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Xiaoxiao Zhou",
      title: "07/12/2023",
      quote:
        "WOWWWWW, I love this lipstick! It's so smooth and creamy, and the color is gorgeous. I'm so happy I found this brand!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Simon Andrew",
      title: "08/05/2023",
      quote:
        "I love the Luxurious Lips Grower! It's so smooth and creamy, and the color is gorgeous. I'm so happy I found this brand!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1525786210598-d527194d3e9a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael Worin",
      title: "03/13/2023",
      quote:
        "Makes my lips look so much fuller and plumper! I love the Luxurious Lips Grower! It's so smooth and creamy, and the color is gorgeous. I'm so happy I found this brand!",
    },
  ];

  return (
    <section className="py-14 bg-white-50/60">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-600 text-base font-medium uppercase block mb-3">
            Our clients
          </span>
          <h1 className="text-5xl font-light">Reviews</h1>
        </div>

        <div className="mt-14">
          <div id="swiper_Two" className="swiper">
            <div className="swiper-wrapper mb-20">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="bg-white shadow text-center rounded px-14 py-10">
                    {/* Avatar Image */}
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="mx-auto h-24 w-24 rounded-full object-cover mb-4" // Tailwind CSS classes for styling
                    />
                    <h5 className=" text-2xl font-medium mt-7">
                      {testimonial.name}
                    </h5>
                    <div className="flex items-center justify-center gap-1 my-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className="fill-yellow-500 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-2xl text-gray-600 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <br></br>
                    <h4 className="text-xl">{testimonial.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
