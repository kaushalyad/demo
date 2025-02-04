import React, { useState, useEffect, useRef } from "react";

const OTPInput = ({ length = 6, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    getOtpFromSms();
  }, []);

  const getOtpFromSms = async () => {
    if ("OTPCredential" in window) {
      try {
        console.log("Listening for OTP..."); // Debugging log
        const otpCredential = await navigator.credentials.get({
          otp: { transport: ["sms"] },
        });

        if (otpCredential && otpCredential.code) {
          console.log("OTP received:", otpCredential.code);
          const otpArray = otpCredential.code.split("");
          setOtp(otpArray);
          onOtpSubmit(otpCredential.code);

          if (inputRefs.current[length - 1]) {
            inputRefs.current[length - 1].focus();
          }
        }
      } catch (error) {
        console.error("OTP auto-fill failed:", error);
      }
    } else {
      console.warn("Web OTP API not supported in this browser.");
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          className="w-12 h-12 text-xl text-center border border-gray-300 rounded focus:border-blue-500 outline-none"
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OTPInput;
