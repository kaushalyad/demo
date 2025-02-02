import React from "react";
import RefundCancel from "./RefundCancel";

const CancelSubscription = () => {
  return (
    <>
      <RefundCancel
        text={`Your subscription is cancelled. You will have access to only the free version of Tap Health after
          <span style="
            font-family: Urbanist;
            font-size: 16px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: -0.008em;
            text-align: center;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;">
            12 days.
          </span>
        `}
        checker={"cancelled"}
      />
    </>
  );
};

export default CancelSubscription;
