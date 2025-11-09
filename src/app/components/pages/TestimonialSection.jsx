'use client';

import React from 'react';
import Image from 'next/image';

// Swiper.js imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// React Icons
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Dummy data (aap ise apne data se replace kar sakte hain)
const testimonialData = [
  {
    text: 'Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    image: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
    name: 'Mahfuz Riad',
    designation: 'Ui Designer & CEO',
  },
  {
    text: 'This is a second testimonial. Clients love to see social proof and this component is perfect for showcasing positive feedback in a clean, modern, and interactive way.',
    image: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
    name: 'Jane Doe',
    designation: 'Product Manager',
  },
  {
    text: 'A third example of a client testimonial. The sliding animation and clean layout help build trust with potential customers visiting the website for the first time.',
    image: 'http://t.commonsupport.com/adro/images/resource/thumb-1.jpg',
    name: 'John Smith',
    designation: 'Marketing Head',
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative pt-20 pb-32 md:pb-52 overflow-hidden bg-gray-50">
      {/* Decorative Spinning Ring */}
      <div
        className="absolute left-[-200px] top-[22%] w-[701px] h-[756px] bg-no-repeat bg-center opacity-30 md:opacity-100"
        style={{
          backgroundImage:
            'url(http://t.commonsupport.com/adro/images/icons/ring-circle.png)',
          animation: 'fa-spin 25s infinite alternate', // Replicating the spin animation
        }}
      ></div>

      {/* Decorative Thumbs Image (Desktop Only) */}
      <div className="absolute hidden md:block right-[30px] top-[120px] z-10">
        <Image
          src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
          alt="User thumbs"
          width={404} // Original image width (best guess)
          height={434} // Original image height (best guess)
        />
      </div>

      {/* Large Container */}
      <div className="relative max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Section Title */}
        <div className="sec-title text-center md:text-left mb-16 md:mb-28">
          {/* <span className="title block text-lg font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Testimonial
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Core Clients Say?
          </h2>
        </div>

        {/* Testimonial Carousel Wrapper */}
        <div className="relative max-w-[1100px] mx-auto">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30} // Adds space between slides if needed
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            className="testimonial-carousel"
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={index} className="p-4 md:p-12">
                {/* Testimonial Block */}
                <div className="inner-box bg-white p-8 md:p-20 lg:px-28 rounded-xl shadow-lg border-2 border-gray-100 md:shadow-2xl md:border-0">
                  <p className="text-lg leading-8 text-gray-700 font-normal mb-12 font-sans">
                    {item.text}
                  </p>
                  
                  {/* Info Box */}
                  <div className="info-box relative pl-24 md:pl-28 pt-2.5">
                    {/* Thumb */}
                    <div className="thumb absolute left-0 top-0 h-[82px] w-[82px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={82}
                        height={82}
                        className="rounded-full border-[6px] border-purple-100 shadow-xl"
                      />
                    </div>
                    {/* Name */}
                    <h4 className="name text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h4>
                    {/* Designation */}
                    <span className="designation text-base text-purple-600 font-normal">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination */}
          <div className="mt-8 md:mt-0 md:absolute md:right-[75px] md:bottom-[70px] z-10 flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <button className="swiper-button-prev-custom h-16 w-16 md:h-[75px] md:w-[75px] rounded-full bg-white shadow-md border-2 border-gray-100 md:border-0 flex items-center justify-center text-gray-700 hover:bg-green-400 hover:text-white hover:shadow-lg transition-all duration-300 group">
                <FiArrowLeft className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors" />
              </button>
              <button className="swiper-button-next-custom h-16 w-16 md:h-[75px] md:w-[75px] rounded-full bg-white shadow-md border-2 border-gray-100 md:border-0 flex items-center justify-center text-gray-700 hover:bg-green-400 hover:text-white hover:shadow-lg transition-all duration-300 group">
                <FiArrowRight className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors" />
              </button>
            </div>
            
            {/* Custom Pagination (Dots) */}
            <div className="swiper-pagination-custom static md:absolute md:bottom-[-40px] md:left-0 md:right-0 flex justify-center gap-2 !w-auto mt-6 md:mt-0 lg:hidden"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

// // components/TestimonialsSection.jsx
// import { Star, MessageSquare } from "lucide-react";

// // Wahi Avatar component
// const Avatar = ({ img, className }) => (
//   <div
//     className={`w-12 h-12 rounded-full bg-cover bg-center shadow-md ${className}`}
//     style={{ backgroundImage: `url(${img})` }}
//   ></div>
// );

// const testimonials = [
//   {
//     name: "Client Name 1",
//     title: "CEO, Tech Co",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
//     quote:
//       "Their work is highly professional. They delivered our project on time and within budget. Highly recommended!",
//   },
//   {
//     name: "Client Name 2",
//     title: "Founder, Startup",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
//     quote:
//       "The team is amazing! They understood our vision and built an excellent product.",
//   },
//   {
//     name: "Client Name 3",
//     title: "Manager, E-com",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop",
//     quote:
//       "Our sales doubled thanks to their marketing strategy. Thank you!",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-gray-50/50">
//       {/* Floating Element */}
//       <MessageSquare
//         className="absolute top-[10%] left-[10%] text-gray-300 animate-floatReverse"
//         size={24}
//         style={{ animationDelay: "2.5s" }}
//       />

//       <div className="relative z-10 container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-gray-600">
//             Thoughts from our happy clients.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.name}
//               className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="text-yellow-400 fill-yellow-400"
//                       size={20}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
//               </div>
//               <div className="flex items-center">
//                 <Avatar img={testimonial.image} className="mr-4" />
//                 <div>
//                   <h4 className="font-semibold font-primary text-gray-800">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-gray-500 text-sm">{testimonial.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }