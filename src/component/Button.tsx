import React from "react";
//Event Props

type ButtonProps = {
  //   handleClick: () => void;
  //   handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(e) => props.handleClick(e, 1)}>Click</button>
    </div>
  );
};

export default Button;
