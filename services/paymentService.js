const SSLCommerzPayment = require("sslcommerz-lts");
const bookingModel = require("../models/bookingModel");

const store_id = "ncc6767b1be0861c"; // From SSLCommerz
const store_passwd = "ncc6767b1be0861c@ssl"; // From SSLCommerz
const is_live = false; // Set `true` for live environment

const payment = new SSLCommerzPayment({
  store_id: store_id,
  store_passwd: store_passwd,
  isSandboxMode: !is_live, // or false for production
});

exports.initiatePayment = async (user, tour, totalPrice) => {
  const data = {
    total_amount: totalPrice,
    currency: "BDT",
    tran_id: `TRAN_${Date.now()}`, // Unique transaction ID
    success_url: `${process.env.BASE_URL}/api/payment/success`,
    fail_url: `${process.env.BASE_URL}/api/payment/fail`,
    cancel_url: `${process.env.BASE_URL}/api/payment/cancel`,
    ipn_url: `${process.env.BASE_URL}/api/payment/ipn`,
    shipping_method: "NO",
    product_name: tour.name,
    product_category: "Tour",
    product_profile: "general",
    cus_name: user.name,
    cus_email: user.email,
    cus_add1: "",
    cus_city: "",
    cus_postcode: "",
    cus_country: "",
    cus_phone: "01719883746",
    // Add other necessary fields as per your requirement
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  // sslcz.init(data).then(apiResponse => {
  //     // Redirect the user to payment gateway
  //     let GatewayPageURL = apiResponse.GatewayPageURL
  //     res.redirect(GatewayPageURL)
  //     console.log('Redirecting to: ', GatewayPageURL)
  // });
  try {
    const response = await sslcz.init(data);
    // if (response?.status === "SUCCESS") {
    //   await bookingModel.findByIdAndUpdate({ bookingId, status: "Paid" });
    // }
    return response;
  } catch (error) {
    console.error("Error initiating payment:", error);
    throw error;
  }
};
