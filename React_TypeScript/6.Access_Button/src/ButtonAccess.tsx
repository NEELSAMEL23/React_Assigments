import React, { useRef } from "react";

const ButtonAccess: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (): void => {
    if (buttonRef.current) {
      buttonRef.current.innerText = "Clicked!";
    }
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonAccess;
