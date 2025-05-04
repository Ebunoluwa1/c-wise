import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import CwLogo from '../Assets/cwLogo';
import ButtonComponent from './atoms/button.atoms';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


 useEffect(() => {
  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);

    if(window.innerWidth >= 768 ) {setIsOpen(false)}
  }

  handleMobile();
   window.addEventListener('resize', handleMobile);

   return (() => { window.removeEventListener('resize', handleMobile)})
 },[])

    return (
      <nav className="mx-4 my-2 flex align-center justify-between ">
        <div className="flex flex-row items-center justify-start ">
          <div className="flex flex-row  py-2 px-2 pr-14">
            <CwLogo />
          </div>
         
        </div>



        {isMobile ? (
          <div className='-mr-2 flex md:hidden'>
             <button className='transition-transform duration-300 transform text-blue-700 focus:outline-none focus:ring-2 '
             onClick={()=> setIsOpen(!isOpen)}>
              {isOpen ?  (
                  <div className=' ' >
                    <AiOutlineClose className='block h-6 w-6'/>
                  </div>
                ):
                 ( <div className=''>
                    <FiMenu className='block h-6 w-6' />
                </div>)
              }
             </button>
          </div>
        ): (  
          <>
          <div className='flex flex-row items-center justify-start '>
             <div className="flex flex-row space-x-2  transition-transform duration-300 transform">
            <div className="flex pr-4 flex-row items-center text-[#6c82a3] font-normal hover:text-black my-4">
              <p className="pr-1"> Personal</p>
              <a href='hi' className="" >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3] pr-4 font-normal hover:text-black my-4 flex flex-row items-center ">
              <p className="pr-1">Business </p>
              <a href='hi'>
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-black my-4 flex flex-row items-center ">
              <p className="pr-1">Developer</p>
              <a href='hi' >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-black my-4 flex flex-row items-center ">
              <p className="pr-1">Learn</p>
            </div>
          </div>
          </div>

          <div>
            <div className="  transition-transform duration-300 transform flex flex-row my-2 px-2 items-center justify-between space-x-1">
              <div className=''>
                {" "}
                <p className="text-[#0066f5] px-2 mr-6 font-bold">Log in </p>
              </div>
              <ButtonComponent alt children="Sign Up For Free" />
            </div>
         </div>
         </>
        ) }
     
     {/* mobile */}
       {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="absolute transition-transform duration-300 transform  bg-blue-700 w-full top-20 left-0 px-2 pt-2 pb-5 sm:px-3 shadow-lg z-50">
                     <>
          <div className='flex flex-col items-center justify-between '>
             <div className="flex flex-col space-x-2  transition-transform duration-300 transform">
            <div className="flex pr-4 flex-row items-center text-[#6c82a3] font-normal hover:text-white my-4">
              <p className="pr-1"> Personal</p>
              <a href='hi' className="" >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3] pr-4 font-normal hover:text-white my-4 flex flex-row items-center ">
              <p className="pr-1">Business </p>
              <a href='hi'>
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-white my-4 flex flex-row items-center ">
              <p className="pr-1">Developer</p>
              <a href='hi' >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-white my-4 flex flex-row items-center ">
              <p className="pr-1">Learn</p>
            </div>
          </div>
          </div>

          <div>
            <div className="  transition-transform duration-300 transform flex flex-col  items-center justify-between space-y-4">
              <div className='text-center mr-10 hover:text-gray-500'>
                {" "}
                <p className="text-white my-4 font-bold ">Log in </p>
              </div>
              <ButtonComponent  children="Sign Up For Free" />
            </div>
         </div>
         </>
          </div>
        </div>
        )}
      </nav>
         
   );
}

export default Nav