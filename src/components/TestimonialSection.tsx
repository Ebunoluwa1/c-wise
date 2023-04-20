import React, { useState, useRef } from "react";
import VideoLogo from "../Assets/videoLogo";
import ButtonComponent from "./atoms/button.atoms";
import InputComponent from "./atoms/input.atom";
import Wura from "../Assets/wura.jpg";
import mayokun from "../Assets/mayokun.jpg";
import wande from "../Assets/wande.jpg";
import PauseLogo from "../Assets/pauseLogo";
import Table from "../Assets/table";

const TestimonialSection = (Props: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<any | boolean>(null);

  function pauseVideo(): void {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      return videoRef.current.pause();
    }
    // else {
    //   return videoRef.current.play();
    // }
  }

  function playVideo(): void {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      return videoRef.current.play();
    }
  }
  // function holdVideo(): void {
  //   videoRef.current.pause();
  // }

  // function playVideo(): void {
  //   videoRef.current.play();
  // }

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  // const handleToggle = () =>
  // eslint-disable-next-line no-lone-blocks
  // { videoRef.current.pause ? (
  //   <PauseLogo onClick={pauseVideo} />
  // ) : (
  //   <VideoLogo onClick={pauseVideo} />
  // ); }

  // function handleChange(): void {
  //   if (isPlaying === true) {
  //     setIsPlaying(!isPlaying);

  //     setChange(!change);
  //   }

  // }
  return (
    <div className="mr-6 my-6 grid lg:grid-cols-2 gap-4">
      {/* testimonial container  */}
      {/* testimonial left */}
      <div>
        <div className="bg-[rgb(255,236,219)] absolute h-[730px] w-[400px] opacity-50 "></div>
        <div className=" ">
          {" "}
          {isPlaying ? (
            <PauseLogo onClick={pauseVideo} />
          ) : (
            <VideoLogo onClick={playVideo} />
          )}
        </div>

        {/* testimonial , block quote */}
        <div className="bg-white p-6 absolute w-[300px] z-30 -bottom-[148px] left-48 ml-16">
          <blockquote className="text-[#6c82a3] break-words text-sm leading-5">
            I've become more conscious of how I spend my money and also about
            investing. Now, I feel comfortable spending knowing my Cowrywise
            account is there.
          </blockquote>
          {/* testimonial author */}
          <div className="flex justify-between mt-2 font-semibold text-lg">
            <span>Wuraola F</span>
            <a href="#" target="_blank" className="text-[#0066f5]">
              {" "}
              @Wuwu
            </a>
          </div>
        </div>

        {/* testimonial image */}
        <div>
          {isPlaying ? (
            <div className="left-18 h-8">
              <video
                ref={videoRef}
                poster={Wura}
                loop
                playsInline
                autoPlay
                // controls
                muted
                // width={460}
                style={{
                  transform: "scale(1.5) translate3d(0,60px,0)",
                  // marginTop: "140px",
                  // overflow: "hidden",
                  //  height: "13rem",
                  //   width: '100'
                }}
                // height={10}
                className="z-10 top-44 ml-44 opacity-100 items-center w-[300px] object-cover h-[380px] -left-10 absolute "
              >
                <source
                  src="https://cowrywise.com/videos/wura.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <img
              src={Wura}
              alt="wuwu"
              className=" z-10 absolute top-44 left-18 h-[500px] w-[500px] ml-14  "
            />
          )}
        </div>
      </div>

      {/* {testimonial thumbnail} */}
      <ul className=" ml-14 flex flex-row absolute -bottom-[200px] ">
        <li className="">
          <img src={Wura} className="w-[48px] h-[48px] hover:grayscale hover:contrast-100" alt="wuwu" />
        </li>
        <li className="">
          <img src={mayokun} className="w-[48px] h-[48px] hover:grayscale hover:contrast-100" alt="mayokun" />
        </li>
        <li className="">
          <img src={wande} className="w-[48px] h-[48px] active:hover:grayscale hover:contrast-100" alt="wande" />
        </li>
      </ul>

      {/* testimonial right */}

      <div>
        <div className="">
          <p className=" mt-28 text-[8rem] text-[#082552] -tracking-[7.5px] leading-none font-[500] whitespace-normal w-full ">
            Put your money to work{" "}
          </p>
          <h6 className="text-[3rem] mt-4 mb-[0.5em] text-[#082552] font-[400] whitespace-normal  -tracking-[2px] ">
            {" "}
            Invest wisely. Manage risk. <br /> Grow wealth.
          </h6>

          <div>
            <div className="w-[80%} flex flex-row items-center text-center p-2 space-x-4">
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
