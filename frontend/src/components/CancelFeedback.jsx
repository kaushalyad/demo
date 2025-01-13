import React, { useState, useEffect } from "react";
import left_icon from "../assets/Left icon.svg";
import background_image from "../assets/Frame 26080462.png"; // Assuming this is your image path
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal, Button, Typography } from "@mui/material";
import HeaderContent from "./HeaderContent";
import CustomButton from "./CustomButton";
import CustomTextArea from "./CustomTextArea";
import CancelSubscriptionModal from "./CancelSubscriptionModal";
const CancelFeedback = () => {
  const [text, setText] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    if (text.length > 0) setVisible(true);
    else setVisible(false);
  }, [text]);
  return (
    <>
      {/* Set background image */}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: "16px 16px 0px 0px",
            display: "flex",
            minWidth: "100%",
            minHeight: "250px",
          }}
        >
          <CancelSubscriptionModal />
        </ModalContent>
      </Modal>
      <div className="w-[100vw] h-[100vh]  bg-[#F2F5F9]  flex flex-col justify-evenly">
        <div className="flex justify-start  items-center">
          <img className="w-[54px] h-[54px]" src={left_icon} alt="back_icon" />
          <Typography
            color="#252E49"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              letterSpacing: "-0.008em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Request Refund
          </Typography>
        </div>
        <div className="px-[20px] flex flex-col">
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "28.8px",
              color: "#252E49",
              letterSpacing: "-0.008em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Why are you cancelling?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "19.2px",
              marginTop: "5px",
              textAlign: "left",
              color: "#5D6A85",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            This helps us improve and serve you better
          </Typography>
        </div>
        <div className="flex w-[100%] items-center flex-col gap-2 justify-center">
          <HeaderContent
            content={"Not helping me improve"}
            className="rounded-[12px] py-[25px]"
          />
          <HeaderContent
            content={"I like it, but just not using it"}
            className="rounded-[12px] py-[25px]"
          />
          <HeaderContent
            content={"Doesn't work as intended"}
            className="rounded-[12px] py-[25px]"
          />
        </div>
        <div class="flex items-center justify-center mx-4 ">
          <div class="border-t-2 border-solid border-[#9EA7B8] flex-grow"></div>
          <span class="mx-1 text-[#9EA7B8]">
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "21.6px",
                letterSpacing: "-0.008em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              or
            </Typography>
          </span>
          <div class="border-t-2 border-solid border-[#9EA7B8] flex-grow"></div>
        </div>
        <div className="flex justify-center items-center ">
          <CustomTextArea
            placeholder="Type your reason here..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="flex justify-center w-[100%] ">
          <CustomButton
            isVisible={isVisible}
            text="Cancel subscription"
            bgColor="#DA1E2E"
            handleOpen={handleOpen}
          />
        </div>
      </div>
    </>
  );
};
export default CancelFeedback;
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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 0px;
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
