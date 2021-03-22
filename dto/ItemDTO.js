class ItemDTO {
  constructor(code, name, qty, price) {
    let __code = code;
    let __name = name;
    let __qty = qty;
    let __price = price;

    this.getItemCode = function () {
      return __code;
    };
    this.getItemName = function () {
      return __name;
    };
    this.getItemQty = function () {
      return __qty;
    };
    this.getItemPrice = function () {
      return __price;
    };

    this.setItemCode = function (newCode) {
      __code = newCode;
    };
    this.setItemName = function (newName) {
      __name = newName;
    };
    this.setItemQty = function (newQty) {
      __qty = newQty;
    };
    this.setItemPrice = function (newPrice) {
      __price = newPrice;
    };
  }
}
