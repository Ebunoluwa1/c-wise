import React from 'react'
import ButtonComponent from './atoms/button.atoms';
// import {phone} from '../Assets/phone.png'

const Container = () => {

  return (
    <div className=' w-[100%] container mb'>
      {/* w-[100%] flex flex-row justify-between   w-[55vw] h */}
        <div className=' p-10 flex flex-row justify-between'>
            <div className='w-[60vw] items-start px-32 pt-[40px] h-[70vh] bg-[right_bottom_2rem] bg-hero-pattern bg-cover bg-no-repeat
     bg-[#fcfcfc]'>
                <img alt='phone device' className=' pt-12 absolute w-[30vw]' src='https://cowrywise.com/images/mockups/app-screenshot-investment-platform-nigeria.png' />
            </div>

            <div className=' w-[60%] items-end pt-24 text-[4.8rem]  px-24  md:text-[3.36rem] '>
              <h2 className='font-bold text-[rgb(8,37,82)]'>It only takes 5 minutes</h2>
                 {/* first step */}
                <div className='mt-[-8px] mb-8'>
                    <div className=" before:content-[''] before:h-[14%] before:w-[2px] 
                    before:bg-[#0066f5] before:absolute before:transition-[height] 
                    before:ease-out before:duration-75  flex justify-start items-start ease-in-out duration-[0.5s] before:right-[44%] before:mt-24" >
                       {/* before:h-[60px] before:w-[60px] before:left[-17px]*/}
                        <span className="relative text-[1.3rem] before:duration-[0.5s] before:animate-spin before:bg-rgba(162,227,252,.4)  before:absolute before:top[-18px]   before:h-[60px] before:w-[60px] before:left[-17px]  before:rounded-[100%] after:content-['01'] after:text-[#0066f5] after:text-[2rem] after:font-semibold after:right-[-44%]  after:absolute after:mr-10 after:mt-10 "></span>
                        <div className="mt-[18px] ">
                            <span className='text-[#082552] text-[2rem] font-semibold   '>Create an account</span>
                            <p className='font-medium text-[#082552] text-[.9rem] mt-[-14]'>Sign up for an account with your name, email and phone number.</p>
                        </div>
                    </div>
              </div>
              {/* second step */}
                <div className='mt-[-8px] mb-8'>
                    <div className=" before:content-[''] before:h-[14%] before:w-[2px] 
                    before:bg-[#0066f5] before:absolute before:transition-[height] 
                    before:ease-out before:duration-75   flex justify-start items-start ease-in-out duration-[0.5s] before:right-[44%] before:mt-24" >
                       {/* before:h-[60px] before:w-[60px] before:left[-17px]*/}
                        <span className="relative text-[1.3rem] before:duration-[0.5s] before:animate-spin before:bg-rgba(162,227,252,.4)  before:absolute before:top[-18px]   before:h-[60px] before:w-[60px] before:left[-17px]  before:rounded-[100%] after:content-['02'] after:text-[#0066f5] after:text-[2rem] after:font-semibold after:right-[-44%]  after:absolute after:mr-10 after:mt-10 "></span>
                        <div className="mt-[18px] ">
                            <span className='text-[#082552] text-[1.8rem] font-semibold   '>Add a payment method</span>
                            <p className='font-medium text-[#082552] text-[.9rem] mt-[-14]'>using your debit card or a bank transfer, set up your first plan.</p>
                        </div>
                    </div>
              </div>
              
              
              {/* third step */}
              <div className='mt-[-8px] mb-8'>
                    <div className=" " >
                           <span className="relative text-[1.3rem] before:duration-[0.5s] before:animate-spin before:bg-rgba(162,227,252,.4)  before:absolute before:top[-18px]   before:h-[60px] before:w-[60px] before:left[-17px]  before:rounded-[100%] after:content-['03'] after:text-[#0066f5] after:text-[2rem] after:font-semibold after:right-[-44%]  after:absolute after:mr-10 after:mt-10 "></span>
                        <div className="mt-[18px] ">
                            <span className='text-[#082552] text-[1.8rem] font-semibold '>Watch your money grow</span>
                            <p className='font-medium text-[#082552] text-[.9rem] mt-[-14]'>sit back, relax & let your money work for you all day, everyday</p>
                        </div>
                    </div>
              </div>

              <div className=' right-[44%] w-[40%] rounded bg-[#0066f5] text-base py-3 text-center font-normal text-white hover:drop-shadow-xl'>
                Sign Up Now
              </div>
            </div>
        </div>
    </div>
  )
}

export default Container;