export const RangeFunc = () => {

    const Slider = document.getElementById('Range');
  
   const Output= document.getElementById('output');
   Output.innerHTML=Slider.value;
   
   Slider.oninput = function(){
    Output.innerHTML= this.value;
   }
}

export const investFunc = () => {

    const Slider = document.getElementById('Range');
  
   const Output= document.getElementById('put');
   Output.innerHTML=Slider.value * 4;
   
   Slider.oninput = function(){
 Output.innerHTML =this.value;
   }
}