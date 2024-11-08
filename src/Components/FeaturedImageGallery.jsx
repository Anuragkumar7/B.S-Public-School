import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "../../public/images/image6.jpg",
    },
    {
        imgelink:
          "../../public/images/image7.jpg",
      },
      {
        imgelink:
          "../../public/images/image14.jpg",
      },
      {
        imgelink:
          "../../public/images/image9.jpg",
      },
      {
        imgelink:
          "../../public/images/image15.jpg",
      },
      {
        imgelink:
          "../../public/images/image11.jpg",
      },
     

    
  ];
 
  const [active, setActive] = React.useState(
    "../public/images/image6.jpg"  );
 
  return (
    <>
    <Navbar/>
    <div className="grid gap-4 mt-20">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[550px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-12 gap-2">
        {data.map(({ imgelink }, index) => (
            <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
        </>
  );
}