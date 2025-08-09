import React, { useState, useRef } from "react";

interface OtpProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

const App: React.FC<OtpProps> = ({ length = 4, onComplete }) => {

  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return; // Only one digit allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          ref={(el) => {
            inputRefs.current[index] = el; // ✅ fixed: no return value
          }}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            textAlign: "center",
            border: "2px solid black",
            borderRadius: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default App;
