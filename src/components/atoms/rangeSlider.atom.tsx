 import React from 'react'
import { RangeFunc, investFunc } from './chat'
 
 export const RangeSlider = (min: any, max: any) => {
   return (
     <div>
         <input onMouseMove={RangeFunc} 
         onClick={investFunc}
              className=
               "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                id='Range'
                type="range"
                min={5000}
                max={10000000}
           />
    </div>
   )
 }
 