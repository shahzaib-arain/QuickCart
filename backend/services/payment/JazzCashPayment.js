const IPaymentProcessor = require('./IPaymentProcessor');

class JazzCashPayment extends IPaymentProcessor {
  pay(amount) {
    console.log(`Paid ${amount} using JazzCash.`);
  }
}

module.exports = JazzCashPayment;
