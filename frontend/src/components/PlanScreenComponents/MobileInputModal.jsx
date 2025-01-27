import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal, Button, Typography } from "@mui/material";
import chevron_down_icon from "../../assets/chevron-down.svg";
import axios from "axios";
import OtpArea from "./OtpArea";
export default function MobileInputModal({
  open,
  handleClose,
  price,
  planId,
  onLoginSuccess,
}) {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [otpAreaVisible, setOtpAreaVisible] = React.useState(false);
  const [isValidNumber, setValidNumber] = React.useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  const validateMobileNumber = (mobileNumber) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobileNumber);
  };

  const handleInputChange = (event) => {
    setMobileNumber(event.target.value);
    setValidNumber(validateMobileNumber(event.target.value));
  };
  const handleSignIn = () => {
    if (isValidNumber) {
      axios
        .post(apiUrl + "/api/auth/signin", {
          phone: mobileNumber,
        })
        .then((response) => {
          // handle success response
          setOtpAreaVisible(true);
          // console.log(response);
        })
        .catch((error) => {
          // handle error response
          // console.error(error);
        });
    } else {
      alert("Invalid Mobile Number");
    }
  };
  // console.log(mobileNumber);
  return otpAreaVisible ? (
    <OtpArea
      open={open}
      close={handleClose}
      mobileNumber={mobileNumber}
      handleSignIn={handleSignIn}
      setOtpAreaVisible={setOtpAreaVisible}
      price={price}
      planId={planId}
      onLoginSuccess={onLoginSuccess}
    />
  ) : (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        className="py-[20px] px-[16px]  gap-[8px]"
      >
        <ModalContent
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: 24,
            borderRadius: "24px 24px 0 0",
            p: 3,
            minWidth: "100%",
            minHeight: "273px",
          }}
          style={{
            background: "#F2F5F9",
            boxShadow: `
            0px 14px 31px 0px #4B34251A,
            0px 57px 57px 0px #4B342517,
            0px 128px 77px 0px #4B34250D,
            0px 228px 91px 0px #4B342503,
            0px 356px 100px 0px #4B342500
          `,
          }}
        >
          <Typography
            id="unstyled-modal-title"
            className="modal-title "
            sx={{
              fontFamily: "Urbanist",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "28px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Please enter your phone number
          </Typography>
          <div
            className={`px-[16px] py-[12px] flex justify-left items-center bg-white rounded-[99px] gap-2 ${
              !isValidNumber ? "border border-red-500" : ""
            }`}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19.2px",
                letterSpacing: "-0.003em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              +91
            </Typography>
            <img src={chevron_down_icon} />
            <input
              type="text"
              placeholder="9931018857"
              value={mobileNumber}
              onChange={handleInputChange}
              className=" border-l-[2px] px-[12px] outline-none w-[100%] bg-white"
            />
          </div>
          {!isValidNumber && (
            <span className="text-red-500 text-sm px-[16px] ">
              Invalid Phone number
            </span>
          )}
          <div className="flex justify-center">
            <Button
              sx={{
                width: "328px",
                height: "56px",
                position: "absolute",
                bottom: "30px",
                padding: "16px 20px",
                gap: "8px",
                borderRadius: "99px",
                opacity: 1,
                backgroundColor:
                  !isValidNumber || mobileNumber.length === 0
                    ? " #DCE1E8"
                    : "#2563EB",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={!isValidNumber || mobileNumber.length === 0}
              onClick={handleSignIn}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "21.6px",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FFFFFF",
                }}
              >
                Continue
              </Typography>
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
