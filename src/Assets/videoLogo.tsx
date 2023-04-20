import * as React from "react"

const VideoLogo = (
  props:any
) => (
  <svg
    width={42}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabIndex={-1}
    {...props}
    style={{
      position: 'absolute',
      top: '13rem',
      left: '28rem',
      zIndex: '180',

    }}
  >
    <circle opacity={0.3} cx={21} cy={21} r={21} fill="#000" />
    <path
      d="M30.25 20.412c1.222.706 1.222 2.47 0 3.176l-11 6.35c-1.222.706-2.75-.176-2.75-1.587V15.649c0-1.411 1.528-2.293 2.75-1.587l11 6.35z"
      fill="#fff"
      // style={{
      //   width: "28px"
      //   height: "28px",
      // }}
    />
  </svg>
);

export default VideoLogo
