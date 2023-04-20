import React, { useState } from "react";

interface Props {
  placeholder?: string;
  style?: string;
  onChange?: (e: any) => any;
  value?: any;
  type?: string;
  label?: any;
  width?: any;
  required?: boolean;
  containerStyle?: any;
  inputName?: any;
}
const InputComponent: React.FC<Props | any> = ({
  title,
  onChange,
  label,
  width,
  required,
  containerStyle,
  type,
  value,
  style,
  password,
  placeholder,
  inputName,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className={`block ${containerStyle}`}>
        <input
          onChange={onChange}
          required={required}
          value={value}
          style={{
            width: `${width ? width : "100%"}`,
            color: `${placeholder && "black"}`,
          }}
          type={`${(password && !visible && "password") || type}`}
                  className={` border rounded focus:outline-1 focus:ring-1
          focus:outline-[rgba(8,37,82,.11)] p-2 px-2 py-3 text-md  ${
            style && style
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputComponent;
