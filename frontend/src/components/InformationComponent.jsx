import { Typography } from "@mui/material";

const InformationComponent = (data) => {
  return (
    <div className="flex gap-1 p-[12px]">
      <div>
        <img src={data.imgSrc} alt="image" className="min-w-[61px]" />
      </div>
      <div className="flex flex-col">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 800,
            lineHeight: "22px",
            letterSpacing: "-0.003em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#252E49",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.8px",
            letterSpacing: "-0.003em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#3D4966"
          }}
        >
          {data.description}
        </Typography>
      </div>
    </div>
  );
};

export default InformationComponent;
