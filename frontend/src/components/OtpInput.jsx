/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi"; // Import edit icon from react-icons

const OtpInput = ({ length = 4, onOtpSubmit = () => {}, isValidOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Allow only one digit
    setOtp(newOtp);

    // Submit OTP when complete
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedOtp = e.clipboardData.getData("text").trim();

    if (pastedOtp.length === length && !isNaN(pastedOtp)) {
      setOtp([...pastedOtp]);
      onOtpSubmit(pastedOtp);
      inputRefs.current[length - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex gap-4 relative">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"} // Enable OTP auto-fill
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`w-[73px] h-[88px] bg-[#FFFFFF] rounded-[12px] text-[40px] font-extrabold text-center focus:outline-none 
            font-urbanist ${isValidOtp ? "border-[#2563EB] focus:ring-[#2563EB]" : "border-[#DA1E2E]"} border-2`}
        />
      ))}

    </div>
  );
};

export default OtpInput;
