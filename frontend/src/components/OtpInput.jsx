import { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi"; // Import edit icon

const OtpInput = ({ length = 4, onOtpSubmit = () => {}, isValidOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [showEditIcon, setShowEditIcon] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input field when component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Show edit icon after 5 seconds
    const timer = setTimeout(() => {
      setShowEditIcon(true);
    }, 5000);

    return () => clearTimeout(timer);
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

  return (
    <div className="flex gap-4 relative">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"} // Disable OTP auto-fill
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onPaste={handlePaste}
          className={`w-[73px] h-[88px] bg-[#FFFFFF] rounded-[12px] text-[40px] font-extrabold text-center focus:outline-none 
            font-urbanist ${isValidOtp ? "border-[#2563EB] focus:ring-[#2563EB]" : "border-[#DA1E2E]"} border-2`}
        />
      ))}

      {showEditIcon && (
        <FiEdit className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      )}
    </div>
  );
};

export default OtpInput;
