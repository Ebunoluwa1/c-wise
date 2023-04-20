import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import CwLogo from '../Assets/cwLogo';
import ButtonComponent from './atoms/button.atoms';

function Nav() {
    return (
      <nav className="mx-4 my-2 flex justify-between ">
        <div className="flex flex-row items-center justify-start ">
          <div className="flex flex-row  py-2 px-2 pr-14">
            <CwLogo />
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex pr-4 flex-row items-center text-[#6c82a3] font-normal hover:text-black">
              <p className="pr-1"> Personal</p>
              <a href='' className="" >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3] pr-4 font-normal hover:text-black flex flex-row items-center ">
              <p className="pr-1">Business </p>
              <a href=''>
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-black flex flex-row items-center ">
              <p className="pr-1">Developer</p>
              <a href='' >
                <HiOutlineChevronDown />
              </a>
            </div>
            <div className="text-[#6c82a3]  pr-4 font-normal hover:text-black flex flex-row items-center ">
              <p className="pr-1">Learn</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row my-2 px-2 items-center justify-between space-x-1">
            <div className=''>
              {" "}
              <p className="text-[#0066f5] px-2 mr-6 font-bold">Log in </p>
            </div>
            <ButtonComponent alt children="Sign Up For Free" />
          </div>
        </div>
      </nav>
    );
}

export default Nav