const express = require("express");
const router = express.Router();

router.post("/success", (req, res) => {
  // Handle payment success
  const { tran_id, val_id } = req.body;
  console.log(
    `Payment successful for transaction ID: ${tran_id}, Validation ID: ${val_id}`
  );
  res
    .status(200)
    .json({ message: "Payment successful", transactionId: tran_id });
});

router.post("/fail", (req, res) => {
  // Handle payment failure
  const { tran_id } = req.body;
  console.log(`Payment failed for transaction ID: ${tran_id}`);
  res.status(400).json({ message: "Payment failed" });
});

router.post("/cancel", (req, res) => {
  // Handle payment cancellation
  const { tran_id } = req.body;
  console.log(`Payment cancelled for transaction ID: ${tran_id}`);
  res.status(400).json({ message: "Payment cancelled" });
});

router.post("/ipn", (req, res) => {
  // Handle IPN (Instant Payment Notification)
  console.log("IPN received:", req.body);
  res.status(200).send("IPN received");
});

module.exports = router;
