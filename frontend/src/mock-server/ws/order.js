module.exports.reports = {
  rows1: {
    "success": true,
    "errorMessage": null,
    "payload": {
      // "rows": [
        /*
        {
          url: '#',
          items: [
            '1111111111111111111111111', '2222222222222222222222', '2017-08-07T09:12:08.108892Z','333333333333333333333', '44444444444444444444', '555555555555555555555555555555', '66666666666666666666', '766666666666666666666', '8666666666666666666', '2017-08-10T09:12:08.108892Z', '106666666666666666666666'
          ]
        },
        {
          url: '#',
          items: [
            '1', 'a', '2017-08-10T09:12:08.108892Z','3', '4', '5', '2', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-04T09:12:08.108892Z','3', 'c', '5', '6', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-03T09:12:08.108892Z','3', '4', '5', '6', '7', '123', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-02T09:12:08.108892Z','d', '4', '5', '6', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        }
        */
      // ],
      "pagination": {
        "pagesCount": 2,
        "rowsCount": 5,
        "rowsOnPage": 3
      }
    }
  },
  rows2: {
    "success": true,
    "errorMessage": null,
    "payload": {
      "rows": [
        {
          url: '#',
          items: [
            '1666666666666666666666666666666', '2666666666666666666666666666666', '2017-08-07T09:12:08.108892Z','3666666666666666666666666666666', '4666666666666666666666666666666', '5666666666666666666666666666666', '6666666666666666666666666666666', '7666666666666666666666666666666', '8666666666666666666666666666666', '2017-08-10T09:12:08.108892Z', '10666666666666666666666666666666'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-02T09:12:08.108892Z','d', '4', '5', '6', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-04T09:12:08.108892Z','3', 'c', '5', '6', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', 'a', '2017-08-10T09:12:08.108892Z','3', '4', '5', '2', '7', '8', '2017-08-10T09:12:08.108892Z', '10'
          ]
        },
        {
          url: '#',
          items: [
            '1', '2', '2017-08-03T09:12:08.108892Z','3', '4', '5', '6', '7', '123', '2017-08-10T09:12:08.108892Z', '10'
          ]
        }
      ],
      "pagination": {
        "pagesCount": 2,
        "rowsCount": 5,
        "rowsOnPage": 3
      }
    }
  }
};

module.exports.recent = {
  requiringApproval: {
    "success": true,
    "errorMessage": null,
    "payload": {
      headings: [
        "order number",
        "order date",
        "ordered",
        "order status",
        "delivery date",
        ""
      ],
      pageInfo: null,
      noOrdersMessage: "You have no orders",
      rows: [
        {
          "orderNumber": "0010-00162-17-00004",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Product 3",
              "quantity": 1
            }
          ],
          "orderStatus": "Requiring Approval",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00162-17-00004"
          }
        },
        {
          "orderNumber": "0001-00091-17-00002",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Chilli product",
              "quantity": 1
            },
            {
              "name": "POD static product",
              "quantity": 1
            },
            {
              "name": "Static product",
              "quantity": 1
            }
          ],
          "orderStatus": "Requiring Approval",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00091-17-00002"
          }
        },
        {
          "orderNumber": "0010-00184-17-00009",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "POD",
              "quantity": 4
            },
            {
              "name": "Inventory",
              "quantity": 6
            },
            {
              "name": "Product 3",
              "quantity": 5
            },
            {
              "name": "Katkas product",
              "quantity": 78
            }
          ],
          "orderStatus": "Requiring Approval",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00184-17-00009"
          }
        },
        {
          "orderNumber": "0001-00174-17-00001",
          "orderDate": "2017-06-21 14:16:24",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": "Requiring Approval",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00001"
          }
        },
        {
          "orderNumber": "0001-00174-17-00012",
          "orderDate": "2017-06-23 13:26:16",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": "Requiring Approval",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00012"
          }
        }
      ]
    }
  },
  ui: {
    "success": true,
    "errorMessage": null,
    "payload": {
      headings: [
        "order number",
        "order date",
        "ordered",
        "order status",
        "delivery date",
        ""
      ],
      pageInfo: {
        "pagesCount": 10,
        "rowsCount": 28,
        "rowsOnPage": 3
      },
      noOrdersMessage: "You have no orders",
      rows: [
        {
          "orderNumber": "0010-00162-17-00004",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Product 3",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00162-17-00004"
          }
        },
        {
          "orderNumber": "0001-00091-17-00002",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Chilli product",
              "quantity": 1
            },
            {
              "name": "POD static product",
              "quantity": 1
            },
            {
              "name": "Static product",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00091-17-00002"
          }
        },
        {
          "orderNumber": "0010-00184-17-00009",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "POD",
              "quantity": 4
            },
            {
              "name": "Inventory",
              "quantity": 6
            },
            {
              "name": "Product 3",
              "quantity": 5
            },
            {
              "name": "Katkas product",
              "quantity": 78
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00184-17-00009"
          }
        },
        {
          "orderNumber": "0001-00174-17-00001",
          "orderDate": "2017-06-21 14:16:24",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00001"
          }
        },
        {
          "orderNumber": "0001-00174-17-00012",
          "orderDate": "2017-06-23 13:26:16",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00012"
          }
        }
      ]
    }
  },
  page1: {
    "success": true,
    "errorMessage": null,
    "payload": {
      "rows": [
        {
          "orderNumber": "0010-00162-17-фывто123",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Product 3",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00162-17-00004"
          }
        },
        {
          "orderNumber": "0001-00091-17-324фыв",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Chilli product",
              "quantity": 1
            },
            {
              "name": "POD static product",
              "quantity": 1
            },
            {
              "name": "Static product",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00091-17-00002"
          }
        },
        {
          "orderNumber": "0010-00184-17-1фывф",
          "orderDate": "2017-06-22 12:05:49",
          "items": [
            {
              "name": "POD",
              "quantity": 4
            },
            {
              "name": "Inventory",
              "quantity": 6
            },
            {
              "name": "Product 3",
              "quantity": 5
            },
            {
              "name": "Katkas product",
              "quantity": 78
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00184-17-00009"
          }
        },
        {
          "orderNumber": "0001-00174-17-фывт123",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00001"
          }
        },
        {
          "orderNumber": "0001-00174-17-121",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00012"
          }
        }
      ]
    }
  },
  page2: {
    "success": true,
    "errorMessage": null,
    "payload": {
      "rows": [
        {
          "orderNumber": "0010-00162-17-00004",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Product 3",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00162-17-00004"
          }
        },
        {
          "orderNumber": "0001-00091-17-00002",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "Chilli product",
              "quantity": 1
            },
            {
              "name": "POD static product",
              "quantity": 1
            },
            {
              "name": "Static product",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00091-17-00002"
          }
        },
        {
          "orderNumber": "0010-00184-17-00009",
          "orderDate": "2017-08-07T09:12:08.108892Z",
          "items": [
            {
              "name": "POD",
              "quantity": 4
            },
            {
              "name": "Inventory",
              "quantity": 6
            },
            {
              "name": "Product 3",
              "quantity": 5
            },
            {
              "name": "Katkas product",
              "quantity": 78
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0010-00184-17-00009"
          }
        },
        {
          "orderNumber": "0001-00174-17-00001",
          "orderDate": "2017-06-21 14:16:24",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": null,
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00001"
          }
        },
        {
          "orderNumber": "0001-00174-17-00012",
          "orderDate": "2017-06-23 13:26:16",
          "items": [
            {
              "name": "Inventory",
              "quantity": 1
            }
          ],
          "orderStatus": "Rejected",
          "deliveryDate": "2017-08-07T09:12:08.108892Z",
          "shippingDate": "2017-08-07T09:12:08.108892Z",
          "viewBtn": {
            "text": "View",
            "url": "~/recent-orders/order-detail?orderID=0001-00174-17-00012"
          }
        }
      ]
    }
  }
};

module.exports.detail =  {
  ui: {
    "success": true,
    "errorMessage": null,
    "payload": {
      "dateTimeNAString": "N/A",
      "general": {
        customerName: 'customerName',
        customerId: 'customerId',
        orderId: 'orderId'
      },
      "commonInfo": {
        status: {
          title: 'Status',
          value: 'In progress'
        },
        orderDate: {
          title: 'Order date',
          value: '2017-02-01T09:12:08.108892Z'
        },
        shippingDate: {
          title: 'Shipping date',
          value: null
        },
        totalCost: {
          title: 'Total cost',
          value: '$ 1,383.68'
        }
      },
      "shippingInfo": {
        "title": "Shipping",
        "deliveryMethod": "fedex-delivery",
        "message": "All items will be mailed according to the selected mailing list",
        "address": {
          "address1": "4001 Valley Industrial Blvd",
          "city": "Shakopee",
          "state": "MN",
          "zip": "55379"
        },
        "trackingPrefix": "Track your packages",
        "tracking": null
      },
      "paymentInfo": {
        "title": "Payment",
        "paymentIcon": "order-payment",
        "paidBy": "Paid by credit card",
        "paymentDetail": "Mastercard •••• 4062",
        "date": "2017-08-07T09:12:08.108892Z",
        "datePrefix": "Payment date"
      },
      "pricingInfo": {
        "title": "Pricing",
        "items": [
          {
            "title": "Summary",
            "value": "$ 112.20"
          },
          {
            "title": "Shipping",
            "value": "$ 0.00"
          },
          {
            "title": "Subtotal",
            "value": "$ 112.20"
          },
          {
            "title": "Tax",
            "value": "$ 0.00"
          },
          {
            "title": "Totals",
            "value": "$ 112.20"
          }
        ]
      },
      "orderedItems": {
        "title": "Ordered Items",
        "items": [
          {
            "id": 1,
            "isReport": true,
            "image": "http://satyr.io/200-500x300-700",
            "template": "Information letter lamp post Mar 30 3017",
            "mailingList": "Mailing",
            "shippingDate": "2017-08-07T09:12:08.108892Z",
            "trackingPrefix": "Tracking ID",
            "tracking": [],
            "mailingListPrefix": "Mailing list",
            "shippingDatePrefix": "Shipping date",
            "templatePrefix": "Shipping date",
            "price": "$ 112.2",
            "quantityPrefix": "Quantity:", // Addresses/Quantity,
            "quantityShippedPrefix": "Quantity shipped:",
            "quantityShipped": 22,
            "quantity": 11,
            "unitOfMeasure": "pc",
            "downloadPdfURL": "#",
            "options": [
              {
                "name": "Color",
                "value": "Red"
              },
              {
                "name": "Size",
                "value": "S"
              }
            ],
            "preview": {
              "exists": true,
              "text": "Preview",
              "url": "#"
            },
            "emailProof": {
              "exists": true,
              "text": "Email",
              "url": "2"
            }
          },
          {
            "id": 2,
            "isReport": true,
            "image": "http://satyr.io/200-500x300-700",
            "template": "Information letter lamp post Mar 30 3017",
            "mailingList": "",
            "shippingDate": "2017-08-07T09:12:08.108892Z",
            "trackingPrefix": "Tracking ID",
            "tracking": [
              {
                "id": "501213",
                "url": "#"
              },
              {
                "id": "5012114",
                "url": "#"
              },
              {
                "id": "5014214",
                "url": "#"
              },
              {
                "id": "5012214",
                "url": "#"
              },
              {
                "id": "5041214",
                "url": "#"
              },
              {
                "id": "5051214",
                "url": "#"
              },
              {
                "id": "5016214"
              },
              {
                "id": "501214-501214-501214",
                "url": "#"
              },
              {
                "id": "501214501214"
              },
              {
                "id": "50122214",
                "url": "#"
              }
            ],
            "mailingListPrefix": "Mailing list",
            "shippingDatePrefix": "Shipping date",
            "templatePrefix": "Shipping date",
            "price": "$ 112.2",
            "quantityPrefix": "Quantity:", // Addresses/Quantity,
            "quantityShippedPrefix": "Quantity shipped:",
            "quantityShipped": 22,
            "quantity": 11,
            "unitOfMeasure": "pc",
            "downloadPdfURL": "#",
            "options": [
              {
                "name": "Color",
                "value": "Blue"
              }
            ],
            "preview": {
              "exists": false,
              "text": "Preview",
              "url": "#"
            },
            "emailProof": {
              "exists": true,
              "text": "Email",
              "url": "2"
            }
          }
        ]
      },
      "actions": {
        "accept": {
          "button": "Accept Order",
          "dialog": {
            "title": "Confirm Order",
            "text": "You selected 'Accept Order' click 'Accept Order' if you wish to process the order.",
            "cancelButton": "Cancel",
            "proceedButton": "Accept Order",
            "proceedUrl": "http://localhost:3000/api/order/detail/accept"
          }
        },
        "reject": {
          "button": "Reject Order",
          "dialog": {
            "title": "Reject Order",
            "text": "Type in your explanation for denial (optional)",
            "cancelButton": "Cancel",
            "proceedButton": "Reject Order",
            "proceedUrl": "http://localhost:3000/api/order/detail/reject"
          }
        }
      }
    }
  },
  accept: {
    success: true,
    payload: {
      title: 'Yeahoo! 🚀',
      text: 'The order has been accepted',
      newStatus: 'Approved'
    },
    errorMessage: ''
  },
  reject: {
    success: true,
    payload: {
      title: 'Yeahoo! 😡',
      text: 'The order has been rejected',
      newStatus: 'Rejected'
    },
    errorMessage: ''
  }
};
