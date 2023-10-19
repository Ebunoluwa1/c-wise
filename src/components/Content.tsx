/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react'
// import { HiOutlineChevronDown } from 'react-icons/hi';
// import { RangeFunc, investFunc } from './atoms/chat';
import { RangeSlider } from './atoms/rangeSlider.atom';
import ButtonComponent from './atoms/button.atoms';

interface Props {
  selected?: boolean | undefined;
  style: React.CSSProperties | undefined;
  value: any;
   Output: HTMLElement | null
  Slider: any;
}

const Content = (Props:any) => {
   
    const [invest, setInvest] = useState('onMouseMove')


    return (
      <div className="mx-4 my-2 ">
        <div>
          <h2 className=" mx-6 text-[#082552] font-bold text-[3rem] text-center ">
            Stay the course, reap the rewards
          </h2>
        </div>

        {/*investment part  */}
        <div>
          <div>
            <h2 className="text-[#6c82a3] font-[500] space-x-1 text-lg mt-8 text-center">
              {" "}
              If you invested
            </h2>

            <div className="flex pr-4 flex-row items-center justify-center mx-4 mt-8 text-[#082552] font-semibold hover:text-[#082554]">
              <sup className="pr-1 text-4xl">₦</sup>
              <h1 className="text-9xl" id='output'></h1>
            </div>

                   {/* select options */}
            <main className="my-8 flex flex-row justify-center items-center">
              <div className="flex pr-4 flex-row justify-center items-center text-[#207cf4] font-normal hover:text-[#207cf4] ">
                            {/* <p className="pr-1">Monthly</p>
                            <a href="arow-down" className="">
                              <HiOutlineChevronDown />
                            </a> */}
                <select className="select-input">
                  <option value="onetime">Onetime</option>
                  <option value="weekly">Weekly</option>
                  <option selected value="monthly">
                    Monthly
                  </option>
                </select>
              </div>

              <div className="flex pr-4 flex-row  justify-center items-center text-[#207cf4] font-normal hover:text-black">
                            {/* <p className="pr-1">3 years ago</p>
                            <a href="arow-down" className="">
                              <HiOutlineChevronDown />
                            </a> */}

                <select className="select-input " >
                  <option className=" text-[#207cf4]" value="Last year">Last year</option>
                  <option selected value="3 years ago"  className=" text-[#207cf4]" >
                    3 years ago
                  </option>
                  <option value="5 years ago"  className=" text-[#207cf4]">5 years ago</option>
                </select>
              </div>
            </main>
          </div>

                       {/* Range slider */}
          <div className="my-0 mx-auto max-w-4xl">
            <div className="relative my-20" >
                  <RangeSlider/>
              </div>
          </div>
                 {/* invest */}
    <div className='  w-[95%] items-center text-center flex flex-col text-[14px]'> 
      <span className='items-center text-center backdrop-blur-md relative'>
           <p className='text-[#6c82a3] text-[24px]'>Today you'd have</p>
            <div className="flex pr-4 flex-row items-center justify-center mx-4 mt-8 text-[#6c82a3] font-bold ">
                <sup className="pr-1 text-2xl">₦</sup>
                <h6 className="text-4xl" id='put'></h6>
            </div>
           </span> 

             <div className=' items-center text-center flex flex-col mt-3'>
                <p className='text-[#0066f5] text-[14px]  px-4 py-2 font-normal bg-[#e1f6ff]'> ₦33,690,249 earned in returns on cowrywise</p>
                <p className='text-[#6c82a3] items-center text-center text-[14px] px-4 py-2'> *In a bank, you'd earn ₦1,370, 592</p>
      
              <p className='text-[#6c82a3] items-center w-[800px] text-center mt-7'>Calculations are based on the average performance of conservative mutual funds on Cowrywise from 2019. Calculation excludes processing fees.</p>
             </div>
     
   

       {/* (<div className='items-center flex flex-col text-[14px] bottom-[-107] '>
            <p className='text-[#6c82a3] text-[24px]'>Today you'd have</p>
            <div className="flex pr-4 flex-row items-center justify-center mx-4 mt-8 text-[#6c82a3] font-bold ">
                <sup className="pr-1 text-2xl">₦</sup>
                <h6 className="text-4xl" id='put'></h6>
            </div>

            <div className=' '>
                <p className='text-[#0066f5] text-[14px] px-4 py-2 font-normal bg-[#e1f6ff]'> ₦33,690,249 earned in returns on cowrywise</p>
                <p className='text-[#6c82a3] items-center text-center text-[14px] px-4 py-2'> *In a bank, you'd earn ₦1,370, 592</p>
            </div>
            
              <span>
              <p className='text-[#6c82a3] items-center w-[800px] text-center mt-7'>Calculations are based on the average performance of conservative mutual funds on Cowrywise from 2019. Calculation excludes processing fees.</p>
              </span>
         </div> ) */}

            {/* invest overlay */}
                <div className="items-center text-center flex flex-col z-10 w-[95%] mt-2 absolute left-0 bottom-[-5] bg-[hsla(0,0%,100%,.7)] ease-in-out transition-opacity " >
                    {/* <span className='items-center text-center flex flex-col z-30 w-full absolute bg-[hsla(0,0%,100%,.7)] ease-in-out transition-opacity'> */}
                      <h3 className='text-[#082520] text-4xl font-bold text-center m-4'>Ready to start investing?</h3>
                    <a href="https://my.cowrywise.com/signup">
                      <ButtonComponent alt >Get Started</ButtonComponent>
                    </a>
                      <ButtonComponent margin='18px'>Not yet</ButtonComponent>
                  {/* </span> */}
                </div>
                  {/* ( <div className="hidden items-center text-center  flex-col z-10 w-full" > */}
              
        </div>
    </div> 
</div>
    );
  
  
}
export default Content;
