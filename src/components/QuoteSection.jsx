import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

export const QuoteSection = () => {
//  <Quote />

//  new ScrollCarousel(".my-carousel", {
//   speed: 8,
//   smartSpeed: true,
//   autoplay: true
// });

const Carousel = [
        (<div className='my-slide '>
              <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>
               <div className='text-[#0066f5] space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup ">
                        <p className='font-bold text-[2rem] '>“</p>
                        <h4 className='md:text-[28px] text-base font-semibold'> Automate and build my savings</h4>
                    </a>
                </div>
               </div>
           </div>),
           (<div className='my-slide'>
              <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>

                <div className='text-[#0066f5]  space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup">
                        <p className='font-bold text-[2rem] '>“</p>
                        <h4 className=' md:text-[28px] text-base  '>Diversified long-term investing</h4>
                    </a>
                </div>
            </div>
          </div>),
        
          (<div className='my-slide'>
            <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>

                <div className='text-[#0066f5] space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup">
                        <p className='font-bold text-[2rem] '>“</p>
                        <h4 className='font-semibold   text-base  md:text-[28px]'>Get better returns on my money</h4>
                    </a>
                </div>
            </div>
          </div>),
          
          (<div className='my-slide'>
            <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>

                <div className='text-[#0066f5]  space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup">
                        <p className='font-bold text-[2rem]'>“</p>
                        <h4 className='font-semibold  text-base md:text-[28px]'>Invest my business’ cash</h4>
                    </a>
                </div>
            </div>
          </div>),
        
          (<div className='my-slide'>
             <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>

                <div className='text-[#0066f5] space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup">
                        <p className='font-bold text-[2rem] '>“</p>
                        <h4 className='font-semibold  text-base md:text-[28px]'>Invest in mutual funds easily</h4>
                    </a>
                </div>
            </div>
           </div>),
        
         (<div className='my-slide'>
              <div className='border-2 border-[#0066f5] rounded-xl m-4 px-8 pt-8 w-full space-x-5 h-[230px]'>

                <div className='text-[#0066f5] space-x-8 w-[20vw]'>
                    <a href="https://my.cowrywise.com/signup">
                        <p className='font-bold text-[2rem]'>“</p>
                        <h4 className='font-semibold  text-base  md:text-[28px]'>Invest with very low fees </h4>
                    </a>
                </div>

            </div>
          </div>)
          ]
        

  return (
        <div className='container mb-14'>
            <div className='mx-8 my-24 items-start flex flex-wrap flex-col flex-1 w-[50%]'>
                <div className='font-semibold text-7xl text-[#082554] '>
                    <h2>You name it, we’ve figured it out.</h2>
                </div>
            </div> 

            <ScrollCarousel autoplay autoplaySpeed={8} speed={8} onReady={() => console.log('I am ready')}>
              {Carousel.map((item,index) => (
                <div key={index}>
                    {item}
                </div>
              ))}
             
             </ScrollCarousel>
        </div>
    );
};
export default QuoteSection;
