import React, { useState, useEffect } from "react";
import RefundCancel from "./RefundCancel";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
const Refund = () => {
  const [refundAmount, setRefundAmount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { sessionId } = useAuth();
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/subscription`, {
          headers: { sessionid: sessionId },
        });
        const data = response.data;
        setRefundAmount(data?.data?.paymentHistory[0]?.amount/100);

        // Directly handle status
        if (
          data?.data?.status === "ACTIVE" ||
          data?.data?.status === "PENDING"
        ) {
          console.log("Subscription is active or pending.");
        }
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
    };

    // Fetch data once
    fetchSubscriptionStatus();
  }, [apiUrl, sessionId]);
  console.log(refundAmount);
  const refundText = `
    You will receive your refund of 
    <span style="
      font-family: Urbanist;
      font-size: 16px;
      font-weight: 800;
      line-height: 25px;
      letter-spacing: -0.008em;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    ">
      ₹${refundAmount}
    </span> 
    in 
    <span style="
      font-family: Urbanist;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: -0.008em;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    ">
      24-48 hours.
    </span>.
    You will now only have access to the free version of Tap Health.
  `;

  return <RefundCancel text={refundText} />;
};

export default Refund;
