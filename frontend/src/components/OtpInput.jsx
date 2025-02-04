import React, { useState, useEffect, useRef } from "react";

const OTPInput = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    getOtpFromSms(); // Start OTP listening
  }, []);

  const getOtpFromSms = async () => {
    if ("OTPCredential" in window) {
      try {
        const otpCredential = await navigator.credentials.get({
          otp: { transport: ["sms"] },
        });

        if (otpCredential && otpCredential.code) {
          const extractedOtp = extractOtp(otpCredential.code);
          if (extractedOtp) {
            const otpArray = extractedOtp.split("");
            setOtp(otpArray);
            onOtpSubmit(extractedOtp);

            // Auto-focus last input
            if (inputRefs.current[length - 1]) {
              inputRefs.current[length - 1].focus();
            }
          }
        }
      } catch (error) {
        console.error("OTP auto-fill failed:", error);
      }
    } else {
      console.warn("Web OTP API is not supported in this browser.");
    }
  };

  // Extract 4-digit OTP from any message format
  const extractOtp = (message) => {
    const match = message.match(/\b\d{4}\b/); // Find a 4 to 6-digit number
    return match ? match[0] : "";
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Only one digit per box
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
    <div className="flex gap-4">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onPaste={handlePaste}
          className="w-14 h-16 text-2xl text-center border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
        />
      ))}
    </div>
  );
};

export default OTPInput;
