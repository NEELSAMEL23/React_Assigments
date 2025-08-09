import { useRef } from "react";

function App() {
  // Type the ref to specifically point to an HTMLButtonElement
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "blue";
      buttonRef.current.style.color = "white";
      buttonRef.current.style.padding = "10px 20px";
      buttonRef.current.style.borderRadius = "8px";
    }
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click to Style Me
      </button>
    </div>
  );
}

export default App;
