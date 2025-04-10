const IShippingService = require('./IShippingService');

class FreeShipping extends IShippingService {
  ship() {
    console.log('Free shipping applied.');
  }
}

module.exports = FreeShipping;
