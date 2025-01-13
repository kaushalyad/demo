import React from "react";
import { isAuthenticated } from "../hooks/useAuth";
import MobileInputModal from "./MobileInputModal";

const onPayment = async (price, planId, userId) => {
    // create order
    try {
      const options = {
        planId: planId,
        amount: price, // amount in paise
      };
      const response = await axios.post(
        "http://localhost:3000/api/createOrder",
        options
      );
      const data = await response.data;
      console.log(data);
      const paymentObject = new window.Razorpay({
        key: "rzp_live_kcB9R3YS04DMNn",
        amount: price, // amount in paise
        order_id: data.id,
        ...data,
        handler: function (response) {
          // handle success
          console.log(response);
          // make a payment request to your backend
          const options2 = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          axios
            .post("http://localhost:3000/api/verifyPayment", options2)
            .then((res) => {
              if (res.data.success) {
                localStorage.setItem(`plans_${userId}`, JSON.stringify(planId));

                console.log("Payment Successful");
                alert("Payment Successful");
                // onPaymentSuccess();
              } else {
                console.log("Payment Failed");
                alert("Payment Failed");
                // handle payment failure
              }
            });
        },
      });
      paymentObject.open();
    } catch (error) {
      // handle error
      console.log("not found api end points");
      console.log(error);
    }
  };
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

const Authentication = () => {
  return <>{isAuthenticated ? <></> : <MobileInputModal />}</>;
};

export default Authentication;
