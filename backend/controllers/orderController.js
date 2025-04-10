const JazzCashPayment = require('../services/payment/JazzCashPayment');
const FreeShipping = require('../services/shipping/FreeShipping');
const EmailInvoiceService = require('../services/invoice/EmailInvoiceService');
const OrderProcessor = require('../OrderProcessor');

const placeOrder = (req, res) => {
  const order = { amount: 500 };

  const processor = new OrderProcessor(
    new JazzCashPayment(),
    new FreeShipping(),
    new EmailInvoiceService()
  );

  processor.processOrder(order);

  res.send('Order placed successfully!');
};

module.exports = { placeOrder };
