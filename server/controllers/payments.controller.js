const { request } = require("express");
const { createRazorpayInstance } = require("../config/razorpay.config");
const crypto = require("crypto");
const razorpayInstance = createRazorpayInstance();
require("dotenv").config();
exports.createOrder = async (req, res) => {
  const { planId, amount } = req.body;

  // validate planId and amount
  //checks
  if (!planId || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "planId and amount is required" });
  }

  // create order
  const options = {
    amount: amount * 100,
  };
  try {
    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, message: "Something went wrong" });
      }
      res.status(200).json(order);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { signature, payment_id, order_id } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET;

    // Validate request body
    if (!signature || !payment_id || !order_id) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields in request body",
      });
    }

    // Validate secret key
    if (!secret) {
      return res.status(500).json({
        success: false,
        message: "Razorpay secret key is not configured",
      });
    }

    // Generate HMAC
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(order_id + "|" + payment_id);
    const generatedSignature = hmac.digest("hex");

    // Compare signatures
    if (generatedSignature === signature) {
      return res
        .status(200)
        .json({ success: true, message: "Payment verified" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Payment not verified" });
    }
  } catch (error) {
    console.error("Error in verifyPayment:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
