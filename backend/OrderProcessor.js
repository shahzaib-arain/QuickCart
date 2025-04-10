class OrderProcessor {
    constructor(paymentProcessor, shippingService, invoiceService) {
      this.paymentProcessor = paymentProcessor;
      this.shippingService = shippingService;
      this.invoiceService = invoiceService;
    }
  
    processOrder(order) {
      this.paymentProcessor.pay(order.amount);
      this.shippingService.ship();
      this.invoiceService.send(`Invoice for ${order.amount}`);
    }
  }
  
  module.exports = OrderProcessor;
  