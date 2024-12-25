const SSLCommerzPayment = require("ssl-commerz-node").SslCommerzPayment;

const store_id = process.env.SSL_STORE_ID; // From SSLCommerz
const store_passwd = process.env.SSL_STORE_PASSWORD; // From SSLCommerz
const is_live = false; // Set `true` for live environment

exports.initiatePayment = async (user, tour, totalPrice) => {
  const data = {
    total_amount: totalPrice,
    currency: "BDT",
    tran_id: `TRAN_${Date.now()}`, // Unique transaction ID
    success_url: `${process.env.BASE_URL}/api/payment/success`,
    fail_url: `${process.env.BASE_URL}/api/payment/fail`,
    cancel_url: `${process.env.BASE_URL}/api/payment/cancel`,
    ipn_url: `${process.env.BASE_URL}/api/payment/ipn`, // For IPN notifications
    shipping_method: "No",
    product_name: tour.name,
    product_category: "Tour",
    product_profile: "General",
    cus_name: user.name,
    cus_email: user.email,
    cus_add1: "Customer Address",
    cus_city: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01700000000",
  };

  const sslcommerz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  return await sslcommerz.init(data);
};
