class OrderDTO {
  constructor(order_id, customer_id, item_code, item_name, price, qty, total) {
    var __order_id = order_id;
    var __customer_id = customer_id;
    var __item_code = item_code;
    var __item_name = item_name;
    var __price = price;
    var __qty = qty;
    var _total = total;

    this.getOrderID = function () {
      return __order_id;
    };
    this.getCustomerID = function () {
      return __customer_id;
    };
    this.getItemCode = function () {
      return __item_code;
    };
    this.getItemName = function () {
      return __item_name;
    };
    this.getPrice = function () {
      return __price;
    };
    this.getQty = function () {
      return __qty;
    };
    this.getTotal = function () {
      return _total;
    };

    this.setOrderID = function (newOrderID) {
      __order_id = newOrderID;
    };

    this.setCustomerID = function (newCustomerID) {
      __customer_id = newCustomerID;
    };
    this.setItemCode = function (newItemCode) {
      __item_code = newItemCode;
    };
    this.setItemName = function (newItemName) {
      __item_name = newItemName;
    };
    this.setPrice = function (newPrice) {
      __price = newPrice;
    };
    this.setQty = function (newQty) {
      __qty = newQty;
    };
    this.setTotal = function (newTotal) {
      _total = newTotal;
    };
  }
}
