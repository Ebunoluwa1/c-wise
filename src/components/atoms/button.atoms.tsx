import React from 'react'

interface Props {
  onClick?: (e: any) => React.MouseEventHandler<HTMLButtonElement> | any;
  style?: string;
  margin?: any | string;
  padding?: any | string;
  background?: any | string;
  color?: any | string;
  alt?: Boolean;
  children?: string | any | JSX.Element;
}

const ButtonComponent: React.FC<Props> = (
    {
        children,
        alt,
        style, 
        onClick,
    margin,
        padding,
        background,
        color
    }
) => {
  return (
    <button
      style={{
        margin: `${margin}`,
      padding: `${padding}`,
        background: `${background}`,
        color: `${color}`,
      }}
      onClick={onClick}
      className={` py-2 px-2 drop-shadow-lg ${
        alt
          ? "bg-[#0066f5] px-6 py-3 text-center font-normal text-white hover:drop-shadow-xl"
          : "bg-[white] text-center font-normal text-[#0066f5] hover:drop-shadow-xl"
      }   rounded ${style}
        `}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;