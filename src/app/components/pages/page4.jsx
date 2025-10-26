import React from 'react'
// Saara image data ek array mein daal diya
const imagesData = [
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg", width: "232", height: "290", alt: "Image 01" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg", width: "232", height: "290", alt: "Image 02" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg", width: "232", height: "174", alt: "Image 03" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg", width: "232", height: "155", alt: "Image 04" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-05.jpg", width: "232", height: "349", alt: "Image 05" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg", width: "232", height: "250", alt: "Image 06" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-07.jpg", width: "232", height: "349", alt: "Image 07" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-08.jpg", width: "232", height: "155", alt: "Image 08" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-09.jpg", width: "232", height: "250", alt: "Image 09" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-10.jpg", width: "232", height: "290", alt: "Image 10" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-11.jpg", width: "232", height: "155", alt: "Image 11" },
  { src: "https://cruip-tutorials.vercel.app/masonry/masonry-12.jpg", width: "232", height: "309", alt: "Image 12" },
];
const page4 = () => {
 return (
    <main>
      {/* Yahaan 2 changes hue hain:
        1. 'class' ko 'className' kar diya hai.
        2. HTML 'main' tag ke andar rakha hai (ya aap kisi bhi parent div mein rakh sakte hain).
      */}
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {/* Hum yahaan 'imagesData' array par .map() chala rahe hain.
          Har image ke liye, yeh ek <img> tag return kar raha hai.
        */}
        {imagesData.map((image, index) => (
          <img
            // React ko list mein har item ke liye ek unique 'key' chahiye hoti hai
            key={index} 
            className="w-full rounded-xl shadow"
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        ))}
      </div>
    </main>
  );
};
export default page4