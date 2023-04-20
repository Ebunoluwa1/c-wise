import * as React from "react";

const PauseLogo = (props: any) => (
  <svg
    width={42}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabIndex={-1}
    {...props}
    style={{
      position: "absolute",
      top: "13rem",
      left: "28rem",
      zIndex: "180",
    }}
  >
    <circle opacity={0.3} cx={21} cy={21} r={21} fill="#000" />
    <path
      d="M28.007 15.493v13.014h-4.004V15.493zm-8.009 0v13.014h-4.004V15.493z"
      fill="#fff"
    />
  </svg>
);

export default PauseLogo;
