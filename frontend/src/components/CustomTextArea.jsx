import React from "react";
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
    // Auto-resize functionality
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    // Update the value through the onChange handler
    onChange(event);
  };

  return (
    <div className="w-[95%] ">
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onChange={handleInput}
        className={`w-full p-4 text-black rounded-[16px] border focus:outline-none focus:ring-0 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "textarea-error" : undefined}
      />
      {error && (
        <span id="textarea-error" className="text-red-500 text-sm mt-1 block">
          {error}
        </span>
      )}
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
