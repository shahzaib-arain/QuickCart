const IInvoiceService = require('./IInvoiceService');

class EmailInvoiceService extends IInvoiceService {
  send(invoice) {
    console.log(`Invoice sent via email: ${invoice}`);
  }
}

module.exports = EmailInvoiceService;
