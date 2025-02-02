import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    return 15 * 60; // Reset to 15 minutes when the timer reaches zero
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    // Format timeLeft into MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    return (
        <Typography
            sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "20px",
                fontWeight: 900,
                lineHeight: "21.6px",
                letterSpacing: "-0.003em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
            }}
        >
            {formatTime(timeLeft)}
        </Typography>
    );
};

export default Timer;
