import React, { useRef } from "react";

const FocusInput: React.FC = () => {
  // Create a ref for the input element with type HTMLInputElement
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to focus the input field
  const handleFocus = (): void => {
    inputRef.current?.focus(); // Safe optional chaining
  };

  return (
    <div>
      {/* Input field with ref */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />

      {/* Button to trigger focus */}
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
