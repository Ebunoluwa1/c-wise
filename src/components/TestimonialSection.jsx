import React, { useState, useRef } from "react";
import VideoLogo from "../Assets/videoLogo";
import{ heroData } from "./atoms/data";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import wura_video from "../Assets/video/wura.mp4";
import mayokun_video from "../Assets/video/mayokun.mp4";
import ButtonComponent from "./atoms/button.atoms";
import InputComponent from "./atoms/input.atom";
import Wura from "../Assets/wura.jpg";
import mayokun from "../Assets/mayokun.jpg";
import wande from "../Assets/wande.jpg";
import thumbnail1 from '../Assets/thumbnail1.png';
import thumbnail2 from '../Assets/thumbnail2.png';
import thumbnail3 from '../Assets/thumbnail3.png';
import PauseLogo from "../Assets/pauseLogo";
import Table from "../Assets/table";
import { AnimatePresence, motion } from "framer-motion"

const TestimonialSection = (Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [video,setVideo] = useState({
    0: false,
    1: false,
    2: false,
  })
  const [index, setIndex] = useState(0);
  
   const thumbnailContainer = {
    hidden: { opacity: 0,
    },
    show: {
      opacity:1,
      transition: {
        duration:0.35,
        staggerChildren: 0.25,
      },
    },
   };

   const thumbnailItem = {
      hidden: { 
        scale:0,
        opacity: 0,
    },
    show: (i) => ({
       scale:1,
      opacity:1,
      transition: {
        duration:0.45,
        ease: 'easeIn',
        delay: i * 0.3,
      },
    }),
   };

   const container = {
    hidden: {
      y: 400,
    },
    show: {
     y: 0,
     transition: {
      duration: 0.45,
      delay: 0.65,
      staggerChildren: 0.5,
     },
    },
   };
      const item = {
        hidden: { opacity: 0,},
        show: {
          opacity: [0,0,0,1],
          transition: {
            duration: 0.3,
            ease: "easeIn",
          }
        }
      }  

     function startVideo( index ) {
      setVideo({...video, [index.toString()]: true});
     }
      function stopVideo(index) {
      setVideo({...video, [index.toString()]: false});
     } 
     function handleImageChange(index){
      setIndex(index);
     }

     
  const videos =[wura_video,mayokun_video];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3];
 const {quote,username,author,backgroundColor, poster} = heroData[index] ;
  return (
    <div className="mr-6 mb-6 mt-2 grid lg:grid-cols-2 gap-10">
      {/* testimonial container  */}
      
      {/* testimonial left1 */}
      <AnimatePresence mode='wait' >
            <motion.div
              className="hidden md:block bg-[rgb(255,236,219)]  h-[650px] w-[70%] -left-[20%] top-[5%] p-10 z-10 "
              initial={{ x: "-100vh" }}
              key={`bg__${index}`}
              animate={{ x: ["-50vh", "0vh"] }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
            >
           <div>
             {/* testimonial , block quote */}
            <div className="bg-white p-6 absolute w-[300px] z-30 -bottom-32 left-48 ml-16">
              <blockquote className="text-[#6c82a3] break-words text-sm leading-5">
                {quote}
              </blockquote>
              {/* testimonial author */}
              <div className="flex justify-between mt-2 font-semibold text-lg">
                <span>{author}</span>
                <a href="#" target="_blank" className="text-[#0066f5]">
                  {" "}
                 {username}
                </a>
              </div>
            </div>

            {/* testimonial image and video */}
            <div >
             
              {!video[index] ? (
                <motion.figure
                className="absolute top-[8%] left-[5%] z-10 m-0 w-[90%] flex-shrink-0 max-w-xl h-[450px]"
                key={index}
                exit={{ x: "0vh", scale: 0.5, opacity: [0.5, 0.5, 0] }}
                initial={{ x: "10vh", scale: 0.5 }}
                animate={{ x: "0vh", scale: [0.4, 0.5, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                }}
                >
                 
                  {index !== 2 ? (
                        <div className="absolute z-30 top-[20px] right-[10px] bg-[rgba(25, 24, 24, 0.5)] cursor-pointer">
                         <FaPlayCircle    
                          size="30"
                          color="inherit"
                          onClick={() => startVideo(index)}
                           />
                       </div>
                       ):(
                        ""
                  )}
                     <img src={poster} alt="wura poster"  className="z-10 absolute left-[-5%] h-[500px] w-[450px] max-w-xl flex-shrink ml-14" />
                </motion.figure>
              ) : (
               <div className=" absolute left-[-5%] z-10  w-[450px] flex-shrink max-w-xl  ml-14 ">
                <motion.video
                  autoPlay
                  playsInline
                  loop
                  key={index}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, stiffness: 100 }}
                  exit={{ x: "0vh", scale: 0.5, opacity: [0.5, 0.5, 0] }}
                  initial={{ scale: 0.5, opacity: 0 }}
                >
                  <source
                    src={videos[index]}
                    type="video/mp4"
                  />
                </motion.video>

                   <div className="absolute z-10 top-[20px] right-[10px] bg-[rgba(25, 24, 24, 0.5)] cursor-pointer">
                  <FaStopCircle
                    size="30"
                    color="inherit"
                    onClick={() => stopVideo(index)}
                  />
                 </div>

               </div>
               
              )}
            </div>

          </div>
          </motion.div>

            {/* {testimonial thumbnail} */}
          <motion.div
                className=" ml-14 flex flex-row absolute
                 z-30 -bottom-24 lg:-bottom-18 xl:-bottom-32 "
                variants={thumbnailContainer}
                initial={"hidden"}
                whileInView={"show"}
          >
            {thumbnails.map ((image, imageIndex) => (
               <motion.img 
                 custom={index}
                 variants={thumbnailItem}
                 src={image}
                 key={imageIndex}
                 alt={`thumbnail ${imageIndex + 1}`}
                 onClick={() => handleImageChange(imageIndex)}
                 className= 'hidden md:block pr-4 hover:grayscale hover:brightness-50 active:contrast-125 scale-100 transition-all hover:scale-125 hover:!important '
               />
            ))}
          </motion.div>

       </AnimatePresence>
     

    
      {/* testimonial right */}

      <div>
        <div className="mx-4">
          <p className=" mt-10 md:mt-48 gap-4 text-[8rem] text-[#082552] -tracking-[7.5px] leading-none font-[500] whitespace-normal w-full ">
            Put your money to work{" "}
          </p>
          <h6 className="text-[3rem] mt-4 mb-[0.5em] text-[#082552] font-[400] whitespace-normal  -tracking-[2px] ">
            {" "}
            Invest wisely. Manage risk. <br /> Grow wealth.
          </h6>

          <div>
            <div className="w-[80%} flex flex-col  gap-4 md:flex-row lg:flex-row xl:flex-row items-center text-center p-2 space-x-4 ">
              <InputComponent width="300px" placeholder="Your Email..." />
              <ButtonComponent alt children="Start Investing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
