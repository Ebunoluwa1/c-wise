import React from 'react';
import { footer } from './atoms/data';

const GlobalF = () => {
   
  return (
    <div className='mx-8 mb-6 md:'>
        <div className='container'>
           {/* footer review */}
            <div className='mt-8 mb-24 grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-x-[40px] justify-items-center grid-rows-[1fr]'>
                <div className='bg-white px-8 py-9 w-[100%] rounded-2xl min-h-[300px] border border-solid border-[rgba(8,37,82,.07)] shadow-[1px_12px_24px_rgba(8,37,82,.05)]'>
                    {/* card-top */}
                     <div className='flex items-center justify-between mb-5'> 
                         <div className='box-border w-full flex flex-row flex-wrap basis-[auto]'>
                                <h3 className='text-[3rem] font-semibold'>4.5<sub className='text-[#aeb9cc] bottom-[1px] text-[.5em]'>/5</sub></h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="168" height="27" viewBox="0 0 168 27" svg-inline="" role="presentation" focusable="false" tab-index="-1" className="overflow-hidden h-[50px] w-[124px] ml-5"><g fill="none" fill-rule="evenodd"><path fill="#F7B66D" fill-rule="nonzero" d="M12.902 1.243c.375-1.154 2.008-1.154 2.383 0l2.366 7.282c.168.517.649.866 1.192.866H26.5c1.214 0 1.718 1.553.736 2.267l-6.195 4.5c-.439.32-.622.885-.455 1.401l2.367 7.282c.375 1.155-.947 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4L7.6 17.558a1.253 1.253 0 00-.455-1.4L.95 11.657c-.981-.714-.477-2.267.737-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.375-1.154 2.008-1.154 2.383 0l2.366 7.282c.168.517.65.866 1.192.866h7.657c1.214 0 1.718 1.553.736 2.267l-6.194 4.5c-.44.32-.623.885-.455 1.401l2.366 7.282c.375 1.155-.946 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4l2.367-7.283a1.253 1.253 0 00-.456-1.4l-6.194-4.501c-.982-.714-.478-2.267.736-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.375-1.154 2.008-1.154 2.383 0l2.367 7.282c.167.517.648.866 1.191.866h7.657c1.214 0 1.719 1.553.737 2.267l-6.195 4.5c-.44.32-.623.885-.455 1.401l2.366 7.282c.375 1.155-.946 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.194 4.5c-.982.714-2.303-.246-1.928-1.4l2.366-7.283a1.253 1.253 0 00-.455-1.4L70.6 11.657c-.982-.714-.477-2.267.736-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.376-1.155 2.008-1.155 2.384 0l2.366 7.282c.168.516.649.866 1.192.866h7.657c1.214 0 1.718 1.553.736 2.266l-6.194 4.502c-.439.319-.623.884-.456 1.4l2.366 7.283c.375 1.154-.946 2.114-1.928 1.4l-6.195-4.5a1.252 1.252 0 00-1.472 0l-6.196 4.5c-.981.714-2.303-.246-1.928-1.4l2.366-7.283a1.253 1.253 0 00-.455-1.4l-6.194-4.502c-.982-.713-.478-2.266.736-2.266h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.283z"></path><path fill="#EFEFEF" fill-rule="nonzero" d="M152.203 1.242c.375-1.154 2.008-1.154 2.383 0l2.366 7.283c.168.516.649.866 1.192.866h7.657c1.214 0 1.718 1.553.737 2.266l-6.195 4.502c-.439.319-.623.884-.455 1.4l2.366 7.283c.375 1.154-.946 2.114-1.928 1.4l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4l2.366-7.283a1.254 1.254 0 00-.455-1.4l-6.195-4.502c-.982-.713-.477-2.266.736-2.266h7.658c.542 0 1.023-.35 1.191-.866l2.367-7.283z"></path><path fill="#F7B66D" d="M153.995.525c-.633-.338-1.527-.099-1.792.717l-2.367 7.283a1.253 1.253 0 01-1.191.866h-7.658c-1.213 0-1.718 1.553-.736 2.266l6.195 4.502c.439.319.622.884.455 1.4l-2.366 7.283c-.375 1.154.946 2.114 1.928 1.4l6.195-4.5c.28-.204.624-.277.95-.22V.524h.387z"></path></g></svg>
                         </div>
                         <a href="https://cwry.se/app" className="text-[#082552] text-[1.5rem]">
 <svg width="200" height="66" viewBox="0 0 200 66" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tab-index="-1" className="overflow-hidden h-[50px] w-[120px]"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64 0h182.226c2.656 0 3.62.277 4.59.796a5.413 5.413 0 012.253 2.252c.52.972.796 1.935.796 4.591V57.91c0 2.656-.277 3.62-.796 4.59a5.414 5.414 0 01-2.252 2.253c-.972.52-1.935.796-4.591.796H7.639c-2.656 0-3.62-.276-4.59-.796a5.415 5.415 0 01-2.253-2.252C.276 61.529 0 60.566 0 57.91V7.64c0-2.657.277-3.62.796-4.592A5.415 5.415 0 013.048.796C4.02.276 4.983 0 7.64 0z" fill="#022B69"></path><path d="M24.43 17.502a2.474 2.474 0 00-.568 1.73V46.58a2.474 2.474 0 00.568 1.73l.087.087 15.302-15.305v-.359L24.517 17.415l-.087.087z" fill="#61EEFF"></path><path d="M44.882 38.198l-5.064-5.106v-.359l5.064-5.118.111.062 6.065 3.449c1.73.977 1.73 2.584 0 3.573l-6.04 3.437-.136.062z" fill="#FFE000"></path><path d="M45.03 38.123l-5.211-5.217-15.39 15.405c.729.64 1.808.67 2.57.074l18.045-10.262" fill="#FF3A44"></path><path d="M45.031 27.689L26.987 17.427a2.012 2.012 0 00-2.569.075L39.82 32.906l5.211-5.217z" fill="#ADFFB0"></path><path opacity=".2" d="M44.883 38.012l-17.896 10.2a2.06 2.06 0 01-2.47 0l-.087.086.087.087a2.05 2.05 0 002.47 0L45.03 38.123l-.148-.111z" fill="#000"></path><path opacity=".12" d="M24.43 48.138a2.474 2.474 0 01-.568-1.731v.185a2.474 2.474 0 00.568 1.731l.087-.087-.087-.098zm26.63-13.625l-6.176 3.5.11.11 6.066-3.437a2.164 2.164 0 001.235-1.78 2.3 2.3 0 01-1.235 1.607z" fill="#000"></path><path opacity=".25" d="M26.987 17.6L51.06 31.3a2.3 2.3 0 011.235 1.607 2.164 2.164 0 00-1.235-1.78l-24.073-13.7c-1.73-.976-3.137-.16-3.137 1.818v.185c.037-1.99 1.42-2.806 3.137-1.83z" fill="#fff"></path><path d="M78.557 23.745c-.9 0-1.73-.216-2.49-.648a4.86 4.86 0 01-1.807-1.781 4.868 4.868 0 01-.67-2.523c0-.927.224-1.768.67-2.523a4.86 4.86 0 011.807-1.78 4.943 4.943 0 012.49-.65c.715 0 1.381.128 2 .384a4.24 4.24 0 011.55 1.073l-1.034 1.033a3.149 3.149 0 00-1.106-.795 3.546 3.546 0 00-1.423-.278c-.61 0-1.179.146-1.709.437a3.31 3.31 0 00-1.27 1.245c-.319.538-.478 1.156-.478 1.854 0 .697.16 1.315.477 1.854.318.538.742.953 1.271 1.245.53.29 1.104.437 1.722.437.565 0 1.037-.084 1.417-.252.38-.168.72-.393 1.02-.675.194-.195.36-.437.496-.729.137-.291.227-.609.271-.953h-3.217v-1.324h4.621c.044.247.066.503.066.768 0 .6-.092 1.176-.278 1.728a3.645 3.645 0 01-.887 1.437c-.892.944-2.06 1.416-3.509 1.416zm9.163 0c-.624.01-1.24-.15-1.78-.463a3.266 3.266 0 01-1.232-1.278c-.296-.543-.444-1.154-.444-1.834 0-.644.144-1.242.43-1.794a3.385 3.385 0 011.2-1.318 3.18 3.18 0 011.747-.49c.68 0 1.27.15 1.768.45.5.3.878.711 1.14 1.232.26.52.39 1.108.39 1.761 0 .124-.014.278-.04.464H85.72c.053.626.276 1.11.67 1.45.391.34.85.51 1.37.51.414 0 .774-.095 1.08-.285.303-.19.548-.448.733-.775l1.232.583a3.627 3.627 0 01-1.245 1.31c-.512.319-1.127.477-1.84.477zm1.735-4.383a1.683 1.683 0 00-.225-.708 1.61 1.61 0 00-.603-.59c-.269-.158-.598-.238-.986-.238-.468 0-.863.14-1.185.417-.322.278-.545.651-.669 1.12h3.668v-.001zm5.376 4.278c-.3 0-.582-.049-.847-.146a1.86 1.86 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.18v-1.907h1.455v1.907h1.642v1.285h-1.642v3.178c0 .362.071.618.212.768.133.176.362.265.69.265.15 0 .281-.02.396-.06.131-.048.255-.113.37-.192v1.417c-.29.132-.644.199-1.059.199zm6.357-7.84a.948.948 0 01-.695-.285.951.951 0 01-.285-.695c0-.273.095-.505.285-.695a.95.95 0 01.695-.285c.273 0 .505.095.695.285.19.19.285.422.285.695a.936.936 0 01-.285.695.94.94 0 01-.695.285zm-.729.98h1.457v6.754h-1.457V16.78zm5.973 6.86c-.3 0-.583-.049-.848-.146a1.863 1.863 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.179v-1.907h1.457v1.907h1.642v1.285h-1.642v3.178c0 .362.07.618.211.768.133.176.362.265.689.265.15 0 .283-.02.397-.06.131-.048.256-.113.371-.192v1.417c-.291.132-.643.199-1.059.199zm8.687.105c-.68 0-1.29-.156-1.828-.47a3.305 3.305 0 01-1.258-1.29 3.748 3.748 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.72-.977 1.258-1.29.539-.314 1.148-.47 1.828-.47.68 0 1.289.158 1.827.476.539.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.538.314-1.148.47-1.827.47zm0-1.337c.37 0 .715-.09 1.032-.271.318-.181.572-.442.762-.782.19-.34.285-.74.285-1.198 0-.46-.095-.857-.285-1.192a2.004 2.004 0 00-.762-.775 2.052 2.052 0 00-1.032-.271c-.371 0-.715.09-1.033.271-.318.181-.572.44-.762.775-.19.335-.284.733-.284 1.192 0 .459.094.858.284 1.198.19.34.444.6.762.782.318.18.662.271 1.033.271zm4.74-5.628h1.39v.887h.067c.194-.318.483-.58.867-.788a2.54 2.54 0 011.225-.31c.821 0 1.446.24 1.874.72.428.482.642 1.138.642 1.967v4.278h-1.456v-4.079c0-.53-.13-.918-.391-1.165-.26-.248-.62-.371-1.08-.371-.326 0-.617.09-.873.271a1.806 1.806 0 00-.596.722c-.141.3-.212.622-.212.967v3.655h-1.457V16.78zm-46.49 15.786h5.814c1.046 0 2 .22 2.862.658a5.015 5.015 0 012.03 1.845c.492.793.738 1.696.738 2.711 0 1.016-.246 1.923-.738 2.723a4.99 4.99 0 01-2.03 1.858c-.862.438-1.816.657-2.862.657h-2.7v6.068H73.37v-16.52zm5.907 7.499c.77 0 1.373-.223 1.811-.67a2.218 2.218 0 00.658-1.615c0-.63-.22-1.165-.658-1.603-.438-.438-1.042-.658-1.81-.658h-2.793v4.546h2.792zm6.924-7.5h3.022v16.521H86.2V32.565zm8.54 16.89c-1.247 0-2.27-.365-3.07-1.095-.8-.731-1.2-1.689-1.2-2.873 0-.785.208-1.477.623-2.077.416-.6.985-1.061 1.708-1.384.723-.323 1.523-.485 2.4-.485 1.215 0 2.253.177 3.114.531v-.507c0-.647-.242-1.17-.726-1.57-.485-.4-1.135-.6-1.95-.6-.554 0-1.088.128-1.604.381a3.78 3.78 0 00-1.28 1.004l-1.938-1.523a5.695 5.695 0 012.145-1.707c.862-.4 1.8-.6 2.815-.6 1.8 0 3.17.415 4.107 1.246.939.83 1.408 2.046 1.408 3.645v7.245h-2.977v-1.2h-.184c-.354.462-.82.839-1.396 1.131-.577.292-1.242.439-1.996.439l.001-.001zm.714-2.353c.877 0 1.573-.28 2.088-.842.504-.532.781-1.24.773-1.973a5.73 5.73 0 00-2.468-.554c-1.57 0-2.354.585-2.354 1.754 0 .477.17.865.508 1.165.338.3.823.45 1.453.45zm11.124 1.43l-4.961-11.213h3.438l3.046 7.314h.184l2.93-7.314h3.37l-7.269 16.751h-3.253l2.515-5.538zm17.886.924c-1.446 0-2.723-.408-3.83-1.223-1.108-.816-1.885-1.97-2.33-3.461l2.93-1.154c.23.877.622 1.577 1.176 2.1.554.523 1.246.784 2.077.784.692 0 1.284-.173 1.776-.519.493-.346.739-.827.739-1.442a1.878 1.878 0 00-.704-1.511c-.47-.393-1.304-.812-2.503-1.258l-1.016-.369a7.012 7.012 0 01-2.722-1.696c-.754-.761-1.13-1.719-1.13-2.873 0-.86.222-1.645.668-2.353.446-.708 1.077-1.265 1.892-1.673.816-.407 1.738-.611 2.77-.611 1.491 0 2.668.35 3.53 1.05.86.7 1.453 1.519 1.776 2.457l-2.746 1.154a2.75 2.75 0 00-.888-1.281c-.423-.346-.965-.52-1.627-.52-.677 0-1.234.159-1.673.474-.438.315-.657.727-.657 1.234 0 .493.207.912.623 1.258.415.346 1.1.68 2.053 1.003l1.039.347c1.43.492 2.526 1.142 3.288 1.95.761.807 1.142 1.864 1.142 3.172 0 1.077-.277 1.988-.831 2.734a5.083 5.083 0 01-2.134 1.673 6.81 6.81 0 01-2.688.554zm11.792-.185a4.747 4.747 0 01-1.615-.265c-.492-.177-.892-.42-1.2-.727-.723-.692-1.084-1.677-1.084-2.954v-5.422h-2.054V37.32h2.054v-3.323h3.022v3.323h2.885v2.584h-2.885v4.869c0 .6.131 1.03.393 1.292.215.246.584.369 1.107.369.293 0 .535-.038.727-.115.192-.077.442-.208.75-.393v2.954a5.656 5.656 0 01-2.1.391zm8.793.185c-1.215 0-2.3-.273-3.253-.82a5.822 5.822 0 01-2.227-2.238c-.53-.946-.796-2.01-.796-3.195 0-1.17.266-2.23.796-3.184a5.793 5.793 0 012.227-2.25c.954-.546 2.038-.82 3.253-.82 1.2 0 2.277.274 3.23.82a5.793 5.793 0 012.227 2.25c.53.953.796 2.015.796 3.184 0 1.184-.265 2.25-.796 3.195a5.814 5.814 0 01-2.226 2.238c-.954.547-2.031.82-3.231.82zm0-2.792c.585 0 1.123-.139 1.615-.416a3.047 3.047 0 001.177-1.2c.292-.522.439-1.138.439-1.845 0-.692-.147-1.3-.439-1.823a3.047 3.047 0 00-1.177-1.2 3.24 3.24 0 00-1.615-.415c-.584 0-1.123.138-1.615.415a3.134 3.134 0 00-1.188 1.2c-.3.523-.45 1.13-.45 1.823 0 .692.15 1.303.45 1.834.3.53.696.935 1.188 1.211.492.277 1.03.416 1.615.416zm7.386-9.345h2.838v1.569h.184c.293-.554.746-1.011 1.362-1.373a3.936 3.936 0 012.03-.542c.539 0 1.03.085 1.477.254v3.022a9.785 9.785 0 00-1.05-.334 3.845 3.845 0 00-.911-.104c-.893 0-1.6.323-2.123.969-.523.646-.785 1.461-.785 2.446v5.86h-3.022V37.319zm13.73 12.137c-1.169 0-2.222-.27-3.16-.808a5.788 5.788 0 01-2.204-2.227c-.53-.946-.796-2.01-.796-3.195 0-1.123.261-2.165.784-3.127a6.041 6.041 0 012.17-2.295c.922-.57 1.953-.854 3.091-.854 1.215 0 2.261.261 3.138.784a5.113 5.113 0 011.996 2.146c.454.908.68 1.915.68 3.023 0 .354-.022.692-.069 1.015h-8.837c.154.938.527 1.65 1.12 2.134.592.485 1.303.727 2.134.727.692 0 1.288-.15 1.788-.45.5-.3.896-.704 1.188-1.211l2.446 1.2c-1.2 2.092-3.023 3.138-5.468 3.138h-.001zm2.792-7.684c-.03-.369-.165-.734-.403-1.096a2.816 2.816 0 00-.993-.9c-.423-.238-.919-.357-1.488-.357-.723 0-1.342.211-1.857.634-.515.423-.888.996-1.12 1.72l5.861-.001z" fill="#fff"></path></svg></a>
                     </div>
                     {/* card-bottom */}
                      <div>
                        <h6 className='font-semibold text-[2.1rem]'>Available on the Play Store</h6>
                        <p className="text-[#6c82a3] text-[1rem] mx-4 font-medium tracking-[-.2px]">“I was able to achieve my one year goal of saving a particular amount of money every month.” - Lilian, May 2023</p>
                        <a href="https://cwry.se/app" className=" text-[#0066f5] text-[13px] uppercase font-semibold tracking-wide min-h-[48px] border-none rounded-md cursor-pointer transition duration-75 mt-5 leading-[44px] flex items-center relative">Download now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" className='h-[12px] w-[12px] fill-current align-baseline transform duration-100 ease-in mb-' tab-index="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                      </div>
                </div>

                  <div className='bg-white px-8 py-9 w-[100%] rounded-2xl min-h-[300px] border border-solid border-[rgba(8,37,82,.07)] shadow-[1px_12px_24px_rgba(8,37,82,.05)]'>
                    {/* card-top */}
                     <div className='flex items-center justify-between mb-5'> 
                         <div className='box-border w-full flex flex-row flex-wrap basis-[auto]'>
                                <h3 className='text-[3rem] font-semibold'>4.5<sub className='text-[#aeb9cc] bottom-[1px] text-[.5em]'>/5</sub></h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="168" height="27" viewBox="0 0 168 27" svg-inline="" role="presentation" focusable="false" tab-index="-1" className="overflow-hidden h-[50px] w-[124px] ml-5"><g fill="none" fill-rule="evenodd"><path fill="#F7B66D" fill-rule="nonzero" d="M12.902 1.243c.375-1.154 2.008-1.154 2.383 0l2.366 7.282c.168.517.649.866 1.192.866H26.5c1.214 0 1.718 1.553.736 2.267l-6.195 4.5c-.439.32-.622.885-.455 1.401l2.367 7.282c.375 1.155-.947 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4L7.6 17.558a1.253 1.253 0 00-.455-1.4L.95 11.657c-.981-.714-.477-2.267.737-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.375-1.154 2.008-1.154 2.383 0l2.366 7.282c.168.517.65.866 1.192.866h7.657c1.214 0 1.718 1.553.736 2.267l-6.194 4.5c-.44.32-.623.885-.455 1.401l2.366 7.282c.375 1.155-.946 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4l2.367-7.283a1.253 1.253 0 00-.456-1.4l-6.194-4.501c-.982-.714-.478-2.267.736-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.375-1.154 2.008-1.154 2.383 0l2.367 7.282c.167.517.648.866 1.191.866h7.657c1.214 0 1.719 1.553.737 2.267l-6.195 4.5c-.44.32-.623.885-.455 1.401l2.366 7.282c.375 1.155-.946 2.115-1.928 1.401l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.194 4.5c-.982.714-2.303-.246-1.928-1.4l2.366-7.283a1.253 1.253 0 00-.455-1.4L70.6 11.657c-.982-.714-.477-2.267.736-2.267h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.282zm34.825 0c.376-1.155 2.008-1.155 2.384 0l2.366 7.282c.168.516.649.866 1.192.866h7.657c1.214 0 1.718 1.553.736 2.266l-6.194 4.502c-.439.319-.623.884-.456 1.4l2.366 7.283c.375 1.154-.946 2.114-1.928 1.4l-6.195-4.5a1.252 1.252 0 00-1.472 0l-6.196 4.5c-.981.714-2.303-.246-1.928-1.4l2.366-7.283a1.253 1.253 0 00-.455-1.4l-6.194-4.502c-.982-.713-.478-2.266.736-2.266h7.657c.543 0 1.024-.35 1.192-.866l2.366-7.283z"></path><path fill="#EFEFEF" fill-rule="nonzero" d="M152.203 1.242c.375-1.154 2.008-1.154 2.383 0l2.366 7.283c.168.516.649.866 1.192.866h7.657c1.214 0 1.718 1.553.737 2.266l-6.195 4.502c-.439.319-.623.884-.455 1.4l2.366 7.283c.375 1.154-.946 2.114-1.928 1.4l-6.195-4.5a1.253 1.253 0 00-1.473 0l-6.195 4.5c-.982.714-2.303-.246-1.928-1.4l2.366-7.283a1.254 1.254 0 00-.455-1.4l-6.195-4.502c-.982-.713-.477-2.266.736-2.266h7.658c.542 0 1.023-.35 1.191-.866l2.367-7.283z"></path><path fill="#F7B66D" d="M153.995.525c-.633-.338-1.527-.099-1.792.717l-2.367 7.283a1.253 1.253 0 01-1.191.866h-7.658c-1.213 0-1.718 1.553-.736 2.266l6.195 4.502c.439.319.622.884.455 1.4l-2.366 7.283c-.375 1.154.946 2.114 1.928 1.4l6.195-4.5c.28-.204.624-.277.95-.22V.524h.387z"></path></g></svg>
                         </div>
                         <a href='hjh' className="text-[#082552] text-[1.5rem]">
                           <svg width="200" height="66" viewBox="0 0 200 66" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tab-index="-1" className="overflow-hidden h-[50px] w-[120px]"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64 0h182.226c2.656 0 3.62.277 4.59.796a5.413 5.413 0 012.253 2.252c.52.972.796 1.935.796 4.591V57.91c0 2.656-.277 3.62-.796 4.59a5.414 5.414 0 01-2.252 2.253c-.972.52-1.935.796-4.591.796H7.639c-2.656 0-3.62-.276-4.59-.796a5.415 5.415 0 01-2.253-2.252C.276 61.529 0 60.566 0 57.91V7.64c0-2.657.277-3.62.796-4.592A5.415 5.415 0 013.048.796C4.02.276 4.983 0 7.64 0z" fill="#022B69"></path><path d="M24.43 17.502a2.474 2.474 0 00-.568 1.73V46.58a2.474 2.474 0 00.568 1.73l.087.087 15.302-15.305v-.359L24.517 17.415l-.087.087z" fill="#61EEFF"></path><path d="M44.882 38.198l-5.064-5.106v-.359l5.064-5.118.111.062 6.065 3.449c1.73.977 1.73 2.584 0 3.573l-6.04 3.437-.136.062z" fill="#FFE000"></path><path d="M45.03 38.123l-5.211-5.217-15.39 15.405c.729.64 1.808.67 2.57.074l18.045-10.262" fill="#FF3A44"></path><path d="M45.031 27.689L26.987 17.427a2.012 2.012 0 00-2.569.075L39.82 32.906l5.211-5.217z" fill="#ADFFB0"></path><path opacity=".2" d="M44.883 38.012l-17.896 10.2a2.06 2.06 0 01-2.47 0l-.087.086.087.087a2.05 2.05 0 002.47 0L45.03 38.123l-.148-.111z" fill="#000"></path><path opacity=".12" d="M24.43 48.138a2.474 2.474 0 01-.568-1.731v.185a2.474 2.474 0 00.568 1.731l.087-.087-.087-.098zm26.63-13.625l-6.176 3.5.11.11 6.066-3.437a2.164 2.164 0 001.235-1.78 2.3 2.3 0 01-1.235 1.607z" fill="#000"></path><path opacity=".25" d="M26.987 17.6L51.06 31.3a2.3 2.3 0 011.235 1.607 2.164 2.164 0 00-1.235-1.78l-24.073-13.7c-1.73-.976-3.137-.16-3.137 1.818v.185c.037-1.99 1.42-2.806 3.137-1.83z" fill="#fff"></path><path d="M78.557 23.745c-.9 0-1.73-.216-2.49-.648a4.86 4.86 0 01-1.807-1.781 4.868 4.868 0 01-.67-2.523c0-.927.224-1.768.67-2.523a4.86 4.86 0 011.807-1.78 4.943 4.943 0 012.49-.65c.715 0 1.381.128 2 .384a4.24 4.24 0 011.55 1.073l-1.034 1.033a3.149 3.149 0 00-1.106-.795 3.546 3.546 0 00-1.423-.278c-.61 0-1.179.146-1.709.437a3.31 3.31 0 00-1.27 1.245c-.319.538-.478 1.156-.478 1.854 0 .697.16 1.315.477 1.854.318.538.742.953 1.271 1.245.53.29 1.104.437 1.722.437.565 0 1.037-.084 1.417-.252.38-.168.72-.393 1.02-.675.194-.195.36-.437.496-.729.137-.291.227-.609.271-.953h-3.217v-1.324h4.621c.044.247.066.503.066.768 0 .6-.092 1.176-.278 1.728a3.645 3.645 0 01-.887 1.437c-.892.944-2.06 1.416-3.509 1.416zm9.163 0c-.624.01-1.24-.15-1.78-.463a3.266 3.266 0 01-1.232-1.278c-.296-.543-.444-1.154-.444-1.834 0-.644.144-1.242.43-1.794a3.385 3.385 0 011.2-1.318 3.18 3.18 0 011.747-.49c.68 0 1.27.15 1.768.45.5.3.878.711 1.14 1.232.26.52.39 1.108.39 1.761 0 .124-.014.278-.04.464H85.72c.053.626.276 1.11.67 1.45.391.34.85.51 1.37.51.414 0 .774-.095 1.08-.285.303-.19.548-.448.733-.775l1.232.583a3.627 3.627 0 01-1.245 1.31c-.512.319-1.127.477-1.84.477zm1.735-4.383a1.683 1.683 0 00-.225-.708 1.61 1.61 0 00-.603-.59c-.269-.158-.598-.238-.986-.238-.468 0-.863.14-1.185.417-.322.278-.545.651-.669 1.12h3.668v-.001zm5.376 4.278c-.3 0-.582-.049-.847-.146a1.86 1.86 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.18v-1.907h1.455v1.907h1.642v1.285h-1.642v3.178c0 .362.071.618.212.768.133.176.362.265.69.265.15 0 .281-.02.396-.06.131-.048.255-.113.37-.192v1.417c-.29.132-.644.199-1.059.199zm6.357-7.84a.948.948 0 01-.695-.285.951.951 0 01-.285-.695c0-.273.095-.505.285-.695a.95.95 0 01.695-.285c.273 0 .505.095.695.285.19.19.285.422.285.695a.936.936 0 01-.285.695.94.94 0 01-.695.285zm-.729.98h1.457v6.754h-1.457V16.78zm5.973 6.86c-.3 0-.583-.049-.848-.146a1.863 1.863 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.179v-1.907h1.457v1.907h1.642v1.285h-1.642v3.178c0 .362.07.618.211.768.133.176.362.265.689.265.15 0 .283-.02.397-.06.131-.048.256-.113.371-.192v1.417c-.291.132-.643.199-1.059.199zm8.687.105c-.68 0-1.29-.156-1.828-.47a3.305 3.305 0 01-1.258-1.29 3.748 3.748 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.72-.977 1.258-1.29.539-.314 1.148-.47 1.828-.47.68 0 1.289.158 1.827.476.539.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.538.314-1.148.47-1.827.47zm0-1.337c.37 0 .715-.09 1.032-.271.318-.181.572-.442.762-.782.19-.34.285-.74.285-1.198 0-.46-.095-.857-.285-1.192a2.004 2.004 0 00-.762-.775 2.052 2.052 0 00-1.032-.271c-.371 0-.715.09-1.033.271-.318.181-.572.44-.762.775-.19.335-.284.733-.284 1.192 0 .459.094.858.284 1.198.19.34.444.6.762.782.318.18.662.271 1.033.271zm4.74-5.628h1.39v.887h.067c.194-.318.483-.58.867-.788a2.54 2.54 0 011.225-.31c.821 0 1.446.24 1.874.72.428.482.642 1.138.642 1.967v4.278h-1.456v-4.079c0-.53-.13-.918-.391-1.165-.26-.248-.62-.371-1.08-.371-.326 0-.617.09-.873.271a1.806 1.806 0 00-.596.722c-.141.3-.212.622-.212.967v3.655h-1.457V16.78zm-46.49 15.786h5.814c1.046 0 2 .22 2.862.658a5.015 5.015 0 012.03 1.845c.492.793.738 1.696.738 2.711 0 1.016-.246 1.923-.738 2.723a4.99 4.99 0 01-2.03 1.858c-.862.438-1.816.657-2.862.657h-2.7v6.068H73.37v-16.52zm5.907 7.499c.77 0 1.373-.223 1.811-.67a2.218 2.218 0 00.658-1.615c0-.63-.22-1.165-.658-1.603-.438-.438-1.042-.658-1.81-.658h-2.793v4.546h2.792zm6.924-7.5h3.022v16.521H86.2V32.565zm8.54 16.89c-1.247 0-2.27-.365-3.07-1.095-.8-.731-1.2-1.689-1.2-2.873 0-.785.208-1.477.623-2.077.416-.6.985-1.061 1.708-1.384.723-.323 1.523-.485 2.4-.485 1.215 0 2.253.177 3.114.531v-.507c0-.647-.242-1.17-.726-1.57-.485-.4-1.135-.6-1.95-.6-.554 0-1.088.128-1.604.381a3.78 3.78 0 00-1.28 1.004l-1.938-1.523a5.695 5.695 0 012.145-1.707c.862-.4 1.8-.6 2.815-.6 1.8 0 3.17.415 4.107 1.246.939.83 1.408 2.046 1.408 3.645v7.245h-2.977v-1.2h-.184c-.354.462-.82.839-1.396 1.131-.577.292-1.242.439-1.996.439l.001-.001zm.714-2.353c.877 0 1.573-.28 2.088-.842.504-.532.781-1.24.773-1.973a5.73 5.73 0 00-2.468-.554c-1.57 0-2.354.585-2.354 1.754 0 .477.17.865.508 1.165.338.3.823.45 1.453.45zm11.124 1.43l-4.961-11.213h3.438l3.046 7.314h.184l2.93-7.314h3.37l-7.269 16.751h-3.253l2.515-5.538zm17.886.924c-1.446 0-2.723-.408-3.83-1.223-1.108-.816-1.885-1.97-2.33-3.461l2.93-1.154c.23.877.622 1.577 1.176 2.1.554.523 1.246.784 2.077.784.692 0 1.284-.173 1.776-.519.493-.346.739-.827.739-1.442a1.878 1.878 0 00-.704-1.511c-.47-.393-1.304-.812-2.503-1.258l-1.016-.369a7.012 7.012 0 01-2.722-1.696c-.754-.761-1.13-1.719-1.13-2.873 0-.86.222-1.645.668-2.353.446-.708 1.077-1.265 1.892-1.673.816-.407 1.738-.611 2.77-.611 1.491 0 2.668.35 3.53 1.05.86.7 1.453 1.519 1.776 2.457l-2.746 1.154a2.75 2.75 0 00-.888-1.281c-.423-.346-.965-.52-1.627-.52-.677 0-1.234.159-1.673.474-.438.315-.657.727-.657 1.234 0 .493.207.912.623 1.258.415.346 1.1.68 2.053 1.003l1.039.347c1.43.492 2.526 1.142 3.288 1.95.761.807 1.142 1.864 1.142 3.172 0 1.077-.277 1.988-.831 2.734a5.083 5.083 0 01-2.134 1.673 6.81 6.81 0 01-2.688.554zm11.792-.185a4.747 4.747 0 01-1.615-.265c-.492-.177-.892-.42-1.2-.727-.723-.692-1.084-1.677-1.084-2.954v-5.422h-2.054V37.32h2.054v-3.323h3.022v3.323h2.885v2.584h-2.885v4.869c0 .6.131 1.03.393 1.292.215.246.584.369 1.107.369.293 0 .535-.038.727-.115.192-.077.442-.208.75-.393v2.954a5.656 5.656 0 01-2.1.391zm8.793.185c-1.215 0-2.3-.273-3.253-.82a5.822 5.822 0 01-2.227-2.238c-.53-.946-.796-2.01-.796-3.195 0-1.17.266-2.23.796-3.184a5.793 5.793 0 012.227-2.25c.954-.546 2.038-.82 3.253-.82 1.2 0 2.277.274 3.23.82a5.793 5.793 0 012.227 2.25c.53.953.796 2.015.796 3.184 0 1.184-.265 2.25-.796 3.195a5.814 5.814 0 01-2.226 2.238c-.954.547-2.031.82-3.231.82zm0-2.792c.585 0 1.123-.139 1.615-.416a3.047 3.047 0 001.177-1.2c.292-.522.439-1.138.439-1.845 0-.692-.147-1.3-.439-1.823a3.047 3.047 0 00-1.177-1.2 3.24 3.24 0 00-1.615-.415c-.584 0-1.123.138-1.615.415a3.134 3.134 0 00-1.188 1.2c-.3.523-.45 1.13-.45 1.823 0 .692.15 1.303.45 1.834.3.53.696.935 1.188 1.211.492.277 1.03.416 1.615.416zm7.386-9.345h2.838v1.569h.184c.293-.554.746-1.011 1.362-1.373a3.936 3.936 0 012.03-.542c.539 0 1.03.085 1.477.254v3.022a9.785 9.785 0 00-1.05-.334 3.845 3.845 0 00-.911-.104c-.893 0-1.6.323-2.123.969-.523.646-.785 1.461-.785 2.446v5.86h-3.022V37.319zm13.73 12.137c-1.169 0-2.222-.27-3.16-.808a5.788 5.788 0 01-2.204-2.227c-.53-.946-.796-2.01-.796-3.195 0-1.123.261-2.165.784-3.127a6.041 6.041 0 012.17-2.295c.922-.57 1.953-.854 3.091-.854 1.215 0 2.261.261 3.138.784a5.113 5.113 0 011.996 2.146c.454.908.68 1.915.68 3.023 0 .354-.022.692-.069 1.015h-8.837c.154.938.527 1.65 1.12 2.134.592.485 1.303.727 2.134.727.692 0 1.288-.15 1.788-.45.5-.3.896-.704 1.188-1.211l2.446 1.2c-1.2 2.092-3.023 3.138-5.468 3.138h-.001zm2.792-7.684c-.03-.369-.165-.734-.403-1.096a2.816 2.816 0 00-.993-.9c-.423-.238-.919-.357-1.488-.357-.723 0-1.342.211-1.857.634-.515.423-.888.996-1.12 1.72l5.861-.001z" fill="#fff"></path></svg></a>
                     </div>
                     {/* card-bottom */}
                      <div>
                        <h6 className='font-semibold text-[2.1rem]'>Available on the Play Store</h6>
                        <p className="text-[#6c82a3] text-[1rem] mx-4 font-medium tracking-[-.2px]">“I love the option of being able to lock my money without being able to withdraw it until full term. This is the most important and amazing feature 😍” - Chidiebere, May 2023</p>
                        <a href="https://cwry.se/app"  className=" text-[#0066f5] text-[13px] uppercase font-semibold tracking-wide min-h-[48px] border-none rounded-md cursor-pointer transition duration-75 mt-5 leading-[44px] flex items-center relative">Download now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" className='h-[12px] w-[12px] fill-current align-baseline transform duration-100 ease-in mb-' tab-index="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                      </div>
                </div>
            </div>
            {/* footer cta */}
            <div className='rounded-xl bg-[#0066f5] mb-[40px] shadow-[0px_59px_51px_-34px_rgba(0,103,245,.3)]  py-[80px] px-[10px] justify-center items-center flex flex-row flex-wrap w-full flex-auto'>
                <div className='sm:max-w-[41.67%] sm:p-1 w-full'>
                    <h3 className='leading-normal -tracking-wide text-[2.9rem] text-white font-bold'>Sign up for free.<br />Start investing today.</h3>
                </div>
                
                <div className='sm:max-w-[41.67%] sm:p-1 w-full '>
                   <form action="https://my.cowrywise.com/signup" method="GET">
                      <div className="relative rounded-md bg-[hsla(0,0%,100%,.25)] py-[10px] px-6 w-full h-[60px]">
                        <input type="email" name="email" required placeholder="Your email..." className='text-[#fff_!important] text-[1rem] h-[38px] max-w-[58%] bg-transparent block w-full rounded-md outline-none overflow-visible leading-tight m-0 border-transparent duration-150 ease-linear '/>
                        <input type="hidden" name="utm_source" value="web" />
                        <input type="hidden" name="utm_medium" value="button" />
                        <input type="hidden" name="utm_campaign" value="web_signup" />
                        <button type="submit" className="absolute right-2 top-2 text-[#082552] border-none bg-white min-h-[48px] px-[1.85em] text-base tracking-[-.3px] capitalize font-semibold rounded-md cursor-pointer duration-[.3s] leading-4 shadow-[0_4px_6px_1px_rgba(0,102,245,.18)]">Sign up for free
                        </button>
                      </div>
                     
                    </form>
                </div>

            </div>
         
          
           <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
           {/* footer menu */}
           {footer.map((section, index) => (
         <div key={index} className='w-full  flex  mt-[100px] mb-[40px]'>
                  
              <div className='w-full sm:p-1'>
             
                 <h4 className=" text-[1.5rem] mb-[30px] text-[#082552] leading-5 font-semibold"> {section.heading}</h4>
             
                 <ul className='p-0 list-none'>
                  {section.list.map((item, i) => (
                           <li key={i} className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal'>
                               {item.includes("↗") ? (
                    <a  href="https://cowrywise.com/about" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer'>
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                   
                   </li>
                  ))}
                    
                 </ul>
                  </div>
                  {/* <div className='w-full sm:max-w-[25%] sm:basis-[25%] sm:p-1'>
                     <h4 className=" text-[1.5rem] mb-[30px] text-[#082552] leading-5 font-semibold">{footer[1]}</h4>
               {/* ))} */}
                 {/* {list.map (( item, index) => (  */}
                 {/* <ul className='p-0 list-none'>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/about" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>{footer[1].list}</a>
                     
                 
                    </li>
                  </ul> */}
                
                  {/* </div>  */}
                    {/* <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/press" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  ' >Press</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/careers" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Careers</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/ambassadors" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Ambassadors</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/complaints" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Complaints Management</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/privacy" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer'>Privacy</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Terms</a>
                    </li>
                 </ul>
              </div>
              {/* b */}
              {/* <div className='w-full sm:max-w-[25%] sm:basis-[25%] sm:p-1'>
                 <h4 className=" text-[1.5rem] mb-[30px] text-[#082552] leading-5 font-semibold">Product</h4>
                 <ul className='p-0 list-none'>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/about" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Saving Plans</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/press" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  ' >Investment Plans</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/careers" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Mutual Funds</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/ambassadors" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Embed API</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/complaints" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Sprout</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/privacy" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer'>Circles</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Halal</a>
                    </li>
                     <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Get a suggestion?</a>
                    </li>
                 </ul>
              </div>
              {/* c */}
              {/* <div className='w-full sm:max-w-[25%] sm:basis-[25%] sm:p-1'>
                 <h4 className=" text-[1.5rem] mb-[30px] text-[#082552] leading-5 font-semibold">Resources</h4>
                 <ul className='p-0 list-none'>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/about" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Customer Stories</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/press" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  ' >Media</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/careers" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>FAQs</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/ambassadors" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Security</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/complaints" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Estimate your Interest</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/privacy" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer'>Plan Education</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Engineering</a>
                    </li>
                     <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Glossary</a>
                    </li>
                       <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Blog</a>
                    </li>
                    <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>Help Center</a>
                    </li>
                 </ul>
              </div> */}
              {/* d */}
              {/* <div className='w-full sm:max-w-[25%] sm:basis-[25%] sm:p-1'>
                 <h4 className=" text-[1.5rem] mb-[30px] text-[#082552] leading-5 font-semibold ">Contact</h4>
                 <ul className='p-0 list-none'>
                   <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>support@cowrywise.com</a>
                    </li>
                     <li className='leading-[1.7] tracking-[-.2px] mt-[8px] list-none text-[#082552] font-normal '>
                    <a href="https://cowrywise.com/terms" className='text-[rgba(8,37,82,.6)] font-medium 
                    break-words hover:text-[#0066f5] duration-75 ease-linear text-[1rem] bg-transparent cursor-pointer  '>  WhatsApp ↗</a>
                    </li> 
                 </ul> */}
              {/* </div>  */}
                  
           </div>
           ))}
          </div>

             {/* socials */}
             <div className='w-full flex flex-row flex-wrap mt-[50px] mb-[30px]'>
               <div className='sm:max-w-[58.33%] sm:p-1 w-full '>
                 <ul className='p-0 list-none'>
                     <li className=' w-full flex flex-row items-between space-x-4 justify-items-stretch mt-6'>
                        <a href="https://twitter.com/cowrywise" title="@cowrywise" className='font-medium text-[rgba(8,37,82,.6)] opacity-75 ease-in '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4  hover:fill-[#0066f5]' fill="#022B69"  width="24" height="24" viewBox="0 0 24 24" svg-inline="" role="presentation" focusable="false" tab-index="-1">
                        <path d="M24.05 4.33c-.897.396-1.852.66-2.847.787a4.951 4.951 0 002.173-2.758 9.81 9.81 0 01-3.133 1.208 4.928 4.928 0 00-3.608-1.579c-2.736 0-4.937 2.242-4.937 4.99 0 .396.033.776.114 1.138-4.107-.202-7.742-2.19-10.183-5.219a5.06 5.06 0 00-.676 2.522 5.01 5.01 0 002.194 4.146A4.844 4.844 0 01.915 8.95v.055c0 2.424 1.713 4.438 3.959 4.902-.403.111-.84.164-1.296.164-.316 0-.635-.018-.935-.085.64 1.976 2.457 3.428 4.616 3.476a9.864 9.864 0 01-6.125 2.128 9.17 9.17 0 01-1.182-.069 13.812 13.812 0 007.579 2.239c9.09 0 14.06-7.605 14.06-14.197 0-.22-.007-.434-.018-.645a9.908 9.908 0 002.476-2.59z"></path>
                        </svg>
                        </a>
                        <a className='font-medium text-[rgba(8,37,82,.6)]  ease-in opacity-75' href="https://facebook.com/cowrywise">
                        <svg className='h-4 w-4 hover:fill-[#0066f5]' xmlns="http://www.w3.org/2000/svg" fill="#022B69" width="32" height="32" viewBox="0 0 32 32" svg-inline="" role="presentation" focusable="false" tab-index="-1">
                        <path d="M24 4c0-2.102-1.897-4-4-4H4C1.899 0 .002 1.898.002 4v16c0 2.102 1.897 4 4 4h8v-9.066H9.068v-4H12V9.376c0-2.688 2.018-5.109 4.5-5.109h3.233v4h-3.233c-.354 0-.767.43-.767 1.074v1.593h4v4h-4v9.067h4.267c2.102 0 4-1.899 4-4V4z"></path>
                        </svg>
                        </a>
                        <a className='font-medium text-[rgba(8,37,82,.6)]  ease-in opacity-75' href="https://wa.me/message/TCXFSJS3VKZPD1">
                        <svg className='h-4 w-4 hover:fill-[#0066f5]' xmlns="http://www.w3.org/2000/svg" fill="#022B69" width="32" height="32" viewBox="0 0 32 32" svg-inline="" role="presentation" focusable="false" tab-index="-1"><path d="M16.29 0C7.616 0 .582 6.978.582 15.589c0 2.945.823 5.698 2.253 8.049L0 32l8.699-2.762a15.743 15.743 0 007.592 1.94c8.676 0 15.709-6.982 15.709-15.59C32 6.979 24.967 0 16.29 0zm7.811 21.509c-.369.917-2.04 1.753-2.779 1.789-.738.04-.757.571-4.773-1.172-4.017-1.747-6.433-5.989-6.622-6.263-.19-.271-1.555-2.217-1.483-4.176.075-1.96 1.146-2.884 1.528-3.266.382-.385.82-.454 1.088-.457.316-.006.522-.01.754 0 .235.01.584-.049.888.76.304.81 1.032 2.796 1.123 3.002.092.202.15.437.007.698-.144.262-.219.425-.425.65-.209.226-.44.503-.627.676-.209.19-.427.399-.205.807.218.408.976 1.74 2.125 2.837 1.48 1.41 2.756 1.881 3.151 2.093.396.216.63.19.872-.065.242-.258 1.045-1.123 1.33-1.512.283-.388.548-.313.91-.166.363.147 2.296 1.182 2.69 1.397.396.212.657.323.752.493.095.16.065.957-.304 1.875z"></path>
                        </svg>
                        </a>
                        {/* <a className='font-medium text-[rgba(8,37,82,.6)]  ease-in opacity-75 ' href="https://t.me/cowrywise">
                        <svg className='h-4 w-4 hover:fill-[#0066f5]' xmlns="http://www.w3.org/2000/svg" fill="#022B69" width="42" height="42" viewBox="0 0 42 42" svg-inline="" role="presentation" focusable="false" tab-index="-1" >
                        <path d="M458.689 35.231l-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L245.2 302.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L376.539 77.23c8.523-7.598-1.848-11.809-13.247-4.21L120.95 225.614 16.619 192.96c-22.694-7.086-23.104-22.695 4.723-33.579L429.423 2.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path>
                        </svg>
                        </a> */}
                        <a className='font-medium text-[rgba(8,37,82,.6)] ease-in opacity-75' href="https://instagram.com/cowrywise">
                        <svg className='h-4 w-4 hover:fill-[#0066f5]'  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#022B69" svg-inline="" role="presentation" focusable="false" tab-index="-1">
                        <path d="M23.041 0c4.843 0 8.782 3.94 8.782 8.782v14.259c0 4.842-3.94 8.782-8.782 8.782H8.782C3.94 31.823 0 27.883 0 23.041V8.782C0 3.94 3.94 0 8.782 0h14.259zM29 23.041V8.782a5.966 5.966 0 00-5.959-5.959H8.782a5.965 5.965 0 00-5.958 5.959v14.259A5.965 5.965 0 008.782 29h14.259A5.965 5.965 0 0029 23.041zM15.912 7.712c4.522 0 8.2 3.678 8.2 8.2s-3.678 8.2-8.2 8.2-8.2-3.678-8.2-8.2c0-4.522 3.678-8.2 8.2-8.2zm0 13.576c2.965 0 5.377-2.412 5.377-5.376s-2.412-5.377-5.377-5.377-5.377 2.412-5.377 5.377a5.382 5.382 0 005.377 5.376zm8.544-15.97c.546 0 1.08.22 1.464.606.386.384.606.919.606 1.464 0 .544-.22 1.079-.606 1.464a2.091 2.091 0 01-1.464.606 2.087 2.087 0 01-1.463-.606 2.087 2.087 0 01-.608-1.464c0-.546.222-1.08.608-1.464a2.079 2.079 0 011.463-.606z"></path>
                        </svg>
                        </a>
                        <a className='font-medium text-[rgba(8,37,82,.6)]  ease-in opacity-75 ' href="https://www.youtube.com/channel/UCRApoo2RnIcX4ocFmKZwYSg">
                        <svg viewBox="0 0 48 48" width="48" height="48" fill="#022B69" className='h-4 w-4 hover:fill-[#0066f5]' tab-index="-1" svg-inline="" role="presentation" focusable="false"><g className="gray-fill">
                        <path d="M47.48 13.21s-.46-3.3-1.9-4.74c-1.82-1.92-3.86-1.92-4.8-2.04C34.08 5.94 24 6 24 6s-10.04-.06-16.74.42c-.92.12-2.96.12-4.78 2.04C1.04 9.9.56 13.2.56 13.2S.08 17.09 0 20.96v4.05c.08 3.88.56 7.75.56 7.75s.48 3.3 1.92 4.76c1.82 1.9 4.2 1.84 5.28 2.04 3.76.36 15.82.44 16.24.44 0 0 10.1.02 16.8-.46.92-.12 2.96-.12 4.78-2.04 1.44-1.44 1.92-4.74 1.92-4.74s.48-3.88.5-7.75v-4.05c-.04-3.87-.52-7.75-.52-7.75zM19.14 30V15.98L32 23.26 19.14 30z"></path><path d="M0 0h47.99v48H0z" fill="none"></path></g>
                        </svg>
                        </a>
                     </li>
                   <li className='p-0 list-none'></li>
                 </ul>
               </div>
             </div>

        </div>
            {/*  footer legal top*/}
         <div className='mt-8 mb-4 w-full flex items-center justify-between '>
            <div>
             <p className='text-[1rem] mt-[15px] font-md text-[#082552] tracking-[-.2px]'>🇳🇬 &nbsp; 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.</p>
             <p className='text-[1rem] mt-[15px] font-md text-[#082552] tracking-[-.2px]'>🇺🇸 &nbsp; 2261 Market Street #4817 San Francisco, CA 94114</p>
            </div>
            <div className='bg-[white] my-[12px] mr-[28px] ml-[20px] flex border border-[rgba(8,37,82,.06] shadow-[1px_8px_12px_rgba(8,37,82,.02)] rounded-[12px] max-w-lg'>
              {/* <img src="/images/license/sec.png" alt="Cowrywise SEC License badge" className='h-8 w-8' /> */}
                <div className="flex flex-col mx-4 ">
                  <span className='block text-[#082552] text-2 font-bold mb-[5px]  '>Licensed by the SEC</span>
                  <span className='.8rem text-[rgba(8,37,82,.6)] text-[1rem]'>Fund Manager</span>
                </div>
            </div>
         </div>
         {/* p */}
         <p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>Our mutual funds are managed by our fund management partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. <a className='text-[#0066f5]'  href="https://cowrywise.com/mutual-funds">View full list of available mutual funds on Cowrywise.</a></p>
         <p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>Stash account is a 10-digit virtual bank account number in line with the Nigeria Uniform Bank Account Number (NUBAN) numbering system. The NUBAN accounts are generated with the names of selected banks through our payment partners. In order for a user to be eligible for Stash account number, they must have completed their KYC and added their Bank Verification Number (BVN). Stash is used for the purpose of receiving money transfers in place of a regular debit card. It also receives the proceeds from the sale of any mutual fund on Cowrywise.</p>
         <p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>Cowrywise Financial Technology Limited (“Cowrywise”) is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>
         <p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>The content on this website does not constitute a complete description of Cowrywise’s offerings and services. By using this website, you accept our <a className='text-[#0066f5]'  href="https://cowrywise.com/terms">Terms of Use </a> 
and <a className='text-[#0066f5]' href="https://cowrywise.com/privacy">Privacy Policy.</a></p>
<p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S.</p>
<p className='text-[rgba(8,37,82,.48)] text-[.8rem] leading-[1.5rem] font-semibold my-[15px] '>©<span></span>2023&nbsp;Cowrywise Financial Technology. All rights reserved</p>
     </div>
  )
}

export default GlobalF