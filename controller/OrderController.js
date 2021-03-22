function customerIDLoad() {
  let customer = getAllCustomers();
  customer.forEach((el, i) => {
    let customerOptionData = `<option value="${el.getCustomerID()}">${el.getCustomerID()}</option>`;

    $(".order-customer_id").append(customerOptionData);
  });
}
function itemCodeLoad() {
  let item = getAllItems();
  item.forEach((el) => {
    let itemOptionData = `<option value="${el.getItemCode()}">${el.getItemCode()}</option>`;

    $(".order-item_id").append(itemOptionData);
  });
}

$(".order-customer_id").change(function (e) {
  const details = searchCustomer(
    $(".order-customer_id").find(":selected").text()
  );

  $("#order_customer_id").val(details.getCustomerID());
  $("#order_customer_name").val(details.getCustomerName());
  $("#order_customer_salary").val(details.getCustomerSalary());
  $("#order_customer_address").val(details.getCustomerAddress());
});

$(".order-item_id").change(function (e) {
  const details = searchItem($(".order-item_id").find(":selected").text());

  $("#order_item_name").val(details.getItemName());
  $("#order_item_qty").val(details.getItemQty());
  $("#order_item_price").val(details.getItemPrice());
});

function getAllOrders() {
  return OrderData;
}

function renderOrderTable() {
  $(".order-table_body").text("");
  let orders = getAllOrders();
  orders.forEach((el) => {
    let tblData = `<tr onclick="getCustomerTableValue(this)">
                  <td>${el.getItemCode()}</td>
                  <td>${el.getItemName()}</td>
                  <td>${el.getPrice()}</td>
                  <td>${el.getQty()}</td>
                  <td>${el.getTotal()}</td>
                </tr>`;

    $(".order-table_body").append(tblData);
  });
}

$("#order_qty").keyup(function (e) {
  if ($("#order_item_qty").val() == "") {
    alert("select a item first");
  }
  if ($("#order_item_qty").val() < $("#order_qty").val()) {
    $("#order_qty").val($("#order_item_qty").val());
  }
});

$(".btn-add_order").click(function (e) {
  e.preventDefault();
  if (
    $("#order_item_qty").val() == "" ||
    $("#order_customer_id").val() == "" ||
    $("#order_item_qty").val() < $("#order_qty").val()
  ) {
    alert("fill the details first");
  } else {
    let order = new OrderDTO();
    order.setOrderID($("#order_id").val());
    order.setCustomerID($("#order_customer_id").val());
    order.setItemCode($(".order-item_id").find(":selected").text());
    order.setItemName($("#order_item_name").val());
    order.setPrice($("#order_item_price").val());
    order.setQty($("#order_qty").val());
    order.setTotal($("#order_item_price").val() * $("#order_qty").val());
    OrderData.push(order);
    setPrices();
    renderOrderTable();
    clearOderFields();
  }
});

function clearOderFields() {
  $("#order_item_name").val("");
  $("#order_item_qty").val("");
  $("#order_item_price").val("");
  $("#order_qty").val("");
}

function setPrices() {
  let total = 0;
  $("#total_price").text("");
  let order = getAllOrders();
  order.forEach((el) => {
    total += el.getTotal();
  });
  $("#total_price").text(total);
}
function generateOrderID() {}

function searchOrder(code) {
  let order = getAllOrders();
  for (var i in order) {
    if (order[i].getOrderID() == code) return order[i];
  }
  return null;
}

(() => {
  customerIDLoad();
  itemCodeLoad();
  $("#order_id").val("OID-001");
  $("#current_date").val(new Date().toISOString().slice(0, 10));
})();
