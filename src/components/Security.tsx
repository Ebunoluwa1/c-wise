
import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion"
// bg-[right_bottom_1rem] 

const Security = ({securityReasons} : any) => {

  const [reason, setReason]= useState(0);

  useEffect(() => {
    const timer = setTimeout(changeText, 4000);
        return ()=> clearTimeout(timer);
  },[reason, setReason]);

   const headingVariants = {
    hidden: {
      opacity: 0,
         y: 0,
      scale:0,
    },
    visible: {
    opacity: [0,0,0,1,1,1,1,0],
      y: [100,50,0,0,0,0,0,0,-50],
      scale:[0.5,0.7,0.9,1,1,1,1,1,1],
      transition: {
      duration: 4,
      },
   },
     exit:{
      y:200,
      opacity:0.5
    }
  };
  const spanVariants = {
    hidden: { 
        opacity: 0, 
     },
      visible: { 
        opacity: 1, 
      
       transition:{
           duration:1,
            delay:2.2,
            ease:"easeIn"
               },
      },

  };

  function changeText() {
    setReason(prevState => (prevState + 1) % securityReasons.length)
  }
   const {heading,spans,color} =  securityReasons[reason];

  return (
<div>
      <div className='my-32 bg-[#0066f5] overflow-hidden pb-[150px] relative content-[""] bg-no-repeat bg-security-pattern bg-[656px] bg-auto'>
       
       <div className='container '>
            <div className='flex flex-row flex-wrap w-full mx-4' >
              <div className=' max-w-[41.67%] '>
                <h2 className='text-[3rem] font-sans text-white tracking-[-1px] leading-tight font-bold pt-10 '>Keeping your money safe is our business.</h2>
                <p className='mt-8 text-[1.25rem] text-white tracking-[-1px] leading-[1.7] font-medium'>Trust is our currency. We are committed to the security of your money and the protection of your account.</p>
                <a href="https://cowrywise.com/security" target="arrow_blank" className="mt-6 text-[hsla(0,0%,100%,.7)] leading-[.7px] rounded-md ease-in-out min-h-[44px] relative flex  items-center font-medium duration-75">LEARN MORE
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" tab-index="-1" stroke='white' className='h-4 w-4 -mb-1 '>
                  <path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path>
                </svg>
                </a>
              </div>
            </div>

            <div className='mx-4 m-auto grid grid-cols-1 md:col-span-2 md:grid-cols-2  gap-2'> 
            
            {/* 1 */}
                      <div className=' max-w-[70%] '>
                        <div className='mt-7 pl-10 relative before:shadow-[3px_3px_0_0_hsla(0,0%,100%,.3)] before:bg-white before:content-[""] before:w-[14px] before:h-[14px] before:rounded-sm  before:top-[6px] before:left-0 before:absolute'>
                          <h5 className='text-white font-bold text-[1.5rem] tracking-[-1px] leading-tight'>Top-Notch Security</h5>
                          <p className='text-[1.4rem] mt-4 tracking-[-1px] text-[hsla(0,0%,100%,.8)] font-serif'>We use industry-standard encryption technology to protect user data. We also use two-factor authentication to verify all customer accounts, so you can be sure that your funds are safe and secure.</p>
                        </div>
                    </div>
                    {/* 2 */}
                        <div className=' max-w-[70%] '>
                          <div className='mt-7 pl-10 relative before:shadow-[3px_3px_0_0_hsla(0,0%,100%,.3)] before:bg-white before:content-[""]  before:w-[14px] before:h-[14px] before:rounded-sm before:absolute before:top-[6px] before:left-0'>
                            <h5 className='text-white font-bold text-[1.5rem] tracking-[-1px] leading-tight'>
                              Assets Custody</h5>
                            <p className='text-[1.4rem] mt-4 tracking-[-1px] text-[hsla(0,0%,100%,.8)] font-serif'>Our users’ financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law.</p>
                          </div>
                        </div>
                    {/* 3 */}
                      <div className=' max-w-[70%] '>
                        <div className='mt-7 pl-10 relative before:shadow-[3px_3px_0_0_hsla(0,0%,100%,.3)] before:bg-white before:content-[""]  before:w-[14px] before:h-[14px] before:rounded-sm before:absolute before:top-[6px] before:left-0'>
                          <h5 className='text-white font-bold text-[1.5rem] tracking-[-1px] leading-tight'>
                            Regulatory Compliance</h5>
                          <p className='text-[1.4rem] mt-4 tracking-[-1px] text-[hsla(0,0%,100%,.8)] font-serif'>Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.</p>
                        </div>
                    </div>
                      
                      {/* 4 */}
                      <div className=' max-w-[70%] '>
                        <div className='mt-7 pl-10 relative before:shadow-[3px_3px_0_0_hsla(0,0%,100%,.3)] before:bg-white before:content-[""]  before:w-[14px] before:h-[14px] before:rounded-sm before:absolute before:top-[6px] before:left-0'>
                          <h5 className='text-white font-bold text-[1.5rem] tracking-[-1px] leading-tight'>
                            Best-In-Class Assets</h5>
                          <p className='text-[1.4rem] mt-4 tracking-[-1px] text-[hsla(0,0%,100%,.8)] font-serif'>All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.</p>
                        </div>
                      </div> 

            </div>

       </div >

    </div>

    <div className='relative mb-28'> 
       <div className='container'>
              <div>
                <h6 className=' mx-4 text-[1.6rem] text-[#082552]'>WHY COWRYWISE ?</h6>
                        
                        <AnimatePresence mode='wait' initial={false}>
                          <div className='overflow-hidden max-w-full mx-4 col-xs-12 col-no-gutter'>
                            <div className='flex absolute flex-row gap-4 flex-wrap'>
                                <motion.h6
                                className='text-[#6c82a3] font-medium text-[3rem] transform: translate(0px, -30px); opacity: 0; visibility: hidden;"'
                                  variants={headingVariants}
                                  initial="hidden"
                                  animate="visible"
                                  key={reason}
                                >
                                  {heading}
                                    <motion.span
                                    className="text-[#082552] transform: translate(0px, -30px); opacity: 0; visibility: hidden;"
                                      variants={spanVariants}
                                      key={spans} >
                                      {spans}
                                    </motion.span>
                                </motion.h6>
                            </div>
                          </div>

                        </AnimatePresence>
                {/* <div id="perks-column" className="max-w-full col-xs-12 col-no-gutter">

                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3] font-medium text-[3rem] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Licenced and regulated?</span>
                        <span  
                        className="text-[#082552] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Yup!</span>
                      </div>

                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3] font-medium text-[3rem] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">99.99% service uptime?</span>
                        <span  className="text-[#082552] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Yup!</span>
                      </div>
                      
                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3] font-medium text-[3rem] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Great interest rates?</span>
                        <span  className="text-[#082552] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Yup!</span>
                      </div>
                        
                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3] font-medium text-[3rem] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Diversified investment portfolio?</span>
                        <span  className="text-[#082552] transform: translate(0px, -30px); opacity: 0; visibility: hidden;">Sure</span>
                      </div>
                      
                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3] font-medium text-[3rem] transform: translate(0px); opacity: 1; visibility: inherit;">Secured savings? </span>
                        <span  className="text-[#082552] transform: translate(0px); opacity: 1; visibility: inherit;">Bet!</span>
                      </div>
                        
                      <div className="flex absolute flex-row flex-wrap">
                        <span  className="text-[#6c82a3]  font-medium text-[3rem] transform: translate(0px, 50px); opacity: 0; visibility: hidden;">Convinced?</span>
                        <a href="https://my.cowrywise.com/signtext-[#082552] up" className=" text-[#0066f5]  font-medium text-[3rem] transform: translate(0px, 50px); opacity: 0; visibility: hidden;">Sign up now.</a>
                      </div>
                </div> */}
             </div>
        </div>
    </div>
</div>
  )
}

export default Security;