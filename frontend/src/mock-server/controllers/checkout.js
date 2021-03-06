let {
  emptyCart,
  products,
  deliveryAddresses,
  paymentMethods,
  submit,
  emailConfirmation,
  validationMessage,
  wrapper,
  deliveryMethods,
  totals,
  redirectURL
 } = require('../ws/checkout');

module.exports.ui = (req, res) => {
  const response = Object.assign({}, wrapper);
  response.payload = {
    emptyCart,
    products,
    deliveryAddresses,
    paymentMethods,
    submit,
    emailConfirmation,
    validationMessage
  };
  res.json(response);
};

module.exports.totalPrice = (req, res) => {
  const response = Object.assign({}, wrapper);
  response.payload = {
    deliveryMethods,
    totals
  };

  setTimeout(() => res.json(response), 1500);
};

module.exports.changeQuantity = (req, res) => {
  const response = Object.assign({}, wrapper);
  const { body: { id, quantity } } = req;
  products.items = products.items.map((product) => {
    return {
      ...product,
      quantity: product.id == id ? quantity : product.quantity
    };
  });

  response.payload = {
    products
  };
  res.json(response);
};

module.exports.removeProducs = (req, res) => {
  const response = Object.assign({}, wrapper);
  const { body: { id } } = req;
  products.items = products.items.filter(product => product.id != id);

  response.payload = {
    products
  };
  res.json(response);
};

module.exports.changeAddress = (req, res) => {
  const response = Object.assign({}, wrapper);
  const { body: { id } } = req;

  const items = deliveryAddresses.items.map((deliveryAddress) => {
    return {
      ...deliveryAddress,
      checked: deliveryAddress.id == id
    };
  });

  response.payload = {
    deliveryAddresses: { ...deliveryAddresses, items }
  };
  res.json(response);
};

module.exports.changeDeliveryMethod = (req, res) => {
  const response = Object.assign({}, wrapper);
  const { body: { id } } = req;

  const deliveryMethodsItems = deliveryMethods.items.map((deliveryMethod, i) => {
    let opened = false;
    const deliveryMethodItems = deliveryMethod.items.map((item) => {
      const checked = item.id == id;
      opened = opened || checked;
      return {
        ...item,
        checked
      }
    });

    return {
      ...deliveryMethod,
      opened,
      items: deliveryMethodItems
    };
  });

  response.payload = {
    deliveryMethods: { ...deliveryMethods, items: deliveryMethodsItems },
    totals
  };

  setTimeout(() => res.json(response), 1500);
};

module.exports.submit = (req, res) => {
  const response = Object.assign({}, wrapper);
  response.payload = {
    redirectURL
  };
  res.json(response);
};

module.exports.addNewAddress = (req, res) => {
  const response = Object.assign({}, wrapper);
  response.payload = { id: Math.random() };
  res.json(response);
};
