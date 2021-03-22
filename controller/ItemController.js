function renderItemTableData(data) {
  data.forEach((el) => {
    let item = new ItemDTO();
    item.setItemCode(el.code);
    item.setItemName(el.name);
    item.setItemQty(el.qty);
    item.setItemPrice(el.price);
    itemData.push(item);
  });
}

function getAllItems() {
  return itemData;
}

const renderItemTable = () => {
  let item = getAllItems();
  item.forEach((el, i) => {
    let tblData = `<tr onclick="getItemTableValueValue(this)"> 
              <td>${el.getItemCode()}</td>
              <td>${el.getItemName()}</td>
              <td>${el.getItemQty()}</td>
              <td>${el.getItemPrice()}</td>
            </tr>`;

    $(".item-table_body").append(tblData);
  });
};
function getItemTableValueValue(elem) {
  $("#item-code_input").val($(elem).find("td:eq(0)").text());
  $("#item-name_input").val($(elem).find("td:eq(1)").text());
  $("#item-qty_input").val($(elem).find("td:eq(2)").text());
  $("#item-price_input").val($(elem).find("td:eq(3)").text());
}

const generateItemID = () => {
  let item = getAllItems();
  //   var last = customerData[customerData.length - 1];
  let newID;
  const newIDNum =
    parseInt(item[item.length - 1].getItemCode().match(".{3}$", "")[0]) + 1;

  if (newIDNum < 10) {
    newID = `C00-00${newIDNum}`;
  }
  if (newIDNum >= 10 && newIDNum < 100) {
    newID = `C00-0${newIDNum}`;
  }
  //   newID = newIDNum + "sd";
  //   console.log(newID);

  $("#item-code_input").val(newID);

  return newID;
};
function loadAllItems() {
  let item = getAllItems();
  //   console.log(customer.length);
  $("#item_total").text(item.length);
}

$("#item-code_input").keyup(function (e) {
  $(this).val() == generateItemID();
});

$("#item-name_input").keyup(function (e) {
  const pattern = /^[a-zA-Z ]{5,20}$/;
  if (pattern.test($(this).val())) {
    $(".item_warning_name").css({
      display: "none",
      color: "red",
    });
    disableItemSaveButton("remove");
  } else {
    $(".item_warning_name").css({
      display: "",
      color: "red",
    });
    disableItemSaveButton("add");
  }
});

$("#item-qty_input").keyup(function (e) {
  const pattern = /^[0-9]*$/;
  if (pattern.test($(this).val())) {
    $(".item_warning_qty").css({
      display: "none",
      color: "red",
    });
    disableItemSaveButton("remove");
  } else {
    $(".item_warning_qty").css({
      display: "",
      color: "red",
    });
    disableItemSaveButton("add");
  }
});
$("#item-price_input").keyup(function (e) {
  const pattern = /^[0-9.]*$/;
  if (pattern.test($(this).val())) {
    $(".item_warning_price").css({
      display: "none",
      color: "red",
    });
    disableItemSaveButton("remove");
  } else {
    $(".item_warning_price").css({
      display: "",
      color: "red",
    });
    disableItemSaveButton("add");
  }
});

$(".item-form_button__save").click(function (e) {
  e.preventDefault();
  saveItem(
    $("#item-code_input").val(),
    $("#item-name_input").val(),
    $("#item-qty_input").val(),
    $("#item-price_input").val()
  );
  console.log("asd");
});

function clearItemFields() {
  $("#item-code_input").val(""),
    $("#item-name_input").val(""),
    $("#item-qty_input").val(""),
    $("#item-price_input").val("");
}
const saveItem = (code, name, qty, price) => {
  let item = new ItemDTO();
  item.setItemCode(code);
  item.setItemName(name);
  item.setItemQty(qty);
  item.setItemPrice(price);
  itemData.push(item);

  $(".item-table_body").text("");

  renderItemTable();
  clearItemFields();
  generateItemID();
};

$(".item-form_button__update").click(function (e) {
  e.preventDefault();
  const res = searchItem($("#item-code_input").val());
  if (res == null) {
    alert("item not found");
  } else {
    res.setItemName($("#item-name_input").val());
    res.setItemQty($("#item-qty_input").val());
    res.setItemPrice($("#item-price_input").val());
    $(".item-table_body").text("");
    renderItemTable();
    clearItemFields();
    generateItemID();
  }
});
const searchItem = (code) => {
  let item = getAllItems();
  for (var i in item) {
    if (item[i].getItemCode() == code) return item[i];
  }
  return null;
};

$(".item-form_button__remove").click(function (e) {
  e.preventDefault();
  const res = searchItem($("#item-code_input").val());
  if (res == null) {
    alert("item not found");
  } else {
    const index = itemData.indexOf(res);
    itemData.splice(index, 1);
  }
  $(".item-table_body").text("");
  renderItemTable();
  clearItemFields();
  generateItemID();
});
function disableItemSaveButton(val) {
  if (val == "add") {
    $(".item-form_button__save").addClass("disable-btn");
  }
  if (val == "remove") {
    $(".item-form_button__save").removeClass("disable-btn");
  }
}

// iif
(() => {
  const itemTempData = [
    {
      code: "I00-001",
      name: "Lux Soap",
      qty: 20,
      price: 50,
    },
    {
      code: "I00-002",
      name: "saman",
      qty: 20,
      price: 150,
    },
    {
      code: "I00-003",
      name: "anchor",
      qty: 34,
      price: 350,
    },
  ];
  renderItemTableData(itemTempData);
  renderItemTable();
  generateItemID();
  loadAllItems();
  //   $(".customer_warning_name").css({
  //     display: "none",
  //   });
  //   $(".customer_warning_address").css({
  //     display: "none",
  //   });
  //   $(".customer_warning_salary").css({
  //     display: "none",
  //   });
  //   $(".customer-form_button__save").addClass("disable-btn");
  //   $("#customer_name_input").focus();
})();
