import React, { useState } from "react";
import PropTypes from "prop-types";

const CustomTextArea = ({
  placeholder = "Type your reason here...",
  rows = 5,
  cols = 50,
  value = "",
  onChange = () => {},
  className = "",
  error = "",
}) => {
  const handleInput = (event) => {
    const newValue = event.target.value;

    // Auto-resize functionality
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    // Update the local value
    setLocalValue(newValue);
    onChange(event);

    // Check if the input length is less than 30 characters
  };

  return (
    <div className="w-[95%]">
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={handleInput}
        className={`w-full p-4 text-black rounded-[16px] border focus:outline-none focus:ring-0  ${className}`}
      />
    </div>
  );
};

CustomTextArea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default CustomTextArea;
