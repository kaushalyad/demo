import React from "react";
import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const LottieAnimation = ({
  animation,
  threshold = 1,
  width = 200,
  height = 200,
  loop,
  containerStyle = {},
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: threshold });

  const defaultOptions = {
    loop: loop,
    autoplay: false,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box ref={ref} sx={containerStyle}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        // speed={0.5}
        isStopped={!inView}
        isClickToPauseDisabled={true}
      />
    </Box>
  );
};

export default LottieAnimation;
