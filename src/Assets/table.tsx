import * as React from "react";

const Table = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1270}
    height={1360}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0,0,0)",
    }}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h1270v1360H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#0066F3"
          d="M515.256 766.323 260.103 881.267 3.282 766.325 258.434 651.38l256.822 114.943z"
        />
        <path
          fill="#082552"
          d="m260.104 881.267-.582 483.427h84.912l169.822-.002 1.001-598.369-255.153 114.944z"
        />
        <path
          fill="#0029E9"
          d="M2.28 1364.694h257.242l.58-483.427L3.283 766.324l-1.001 598.37z"
        />
      </g>
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#0066F3"
          d="M892.144 426.323 636.99 541.267 380.169 426.325 635.322 311.38l256.822 114.943z"
        />
        <path
          fill="#082552"
          d="m636.99 541.268-1.823 823.422 254.731.003 2.245-938.369L636.99 541.268z"
        />
        <path
          fill="#0029E9"
          d="M377.925 1364.694h257.242l1.824-823.426L380.17 426.325l-2.245 938.369z"
        />
      </g>
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#0066F3"
          d="m1268.033 131.323-255.151 114.944L756.06 131.325 1011.213 16.38l256.82 114.943z"
        />
        <path
          fill="#082552"
          d="m1012.882 246.267-3.577 1118.877h255.206l3.524-1233.821-255.153 114.944z"
        />
        <path
          fill="#0029E9"
          d="m752.537 1365.142 257.241.001 3.104-1118.876L756.06 131.325l-3.524 1233.817z"
        />
      </g>
    </g>
  </svg>
);
export default Table;

