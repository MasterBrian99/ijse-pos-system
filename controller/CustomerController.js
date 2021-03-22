// C00-001
const savePreCustomer = (data) => {
  data.forEach((el) => {
    let customer = new CustomerDTO();
    customer.setCustomerID(el.id);
    customer.setCustomerName(el.name);
    customer.setCustomerAddress(el.address);
    customer.setCustomerSalary(el.salary);
    customerData.push(customer);
  });
};
const renderCustomerTable = () => {
  let customer = getAllCustomers();
  customer.forEach((el, i) => {
    let tblData = `<tr onclick="getCustomerTableValue(this)"> 
              <td>${el.getCustomerID()}</td>
              <td>${el.getCustomerName()}</td>
              <td>${el.getCustomerAddress()}</td>
              <td>${el.getCustomerSalary()}</td>
            </tr>`;

    $(".customer-tbl__body").append(tblData);
  });
};

function getCustomerTableValue(elem) {
  $("#customer_id_input").val($(elem).find("td:eq(0)").text());
  $("#customer_name_input").val($(elem).find("td:eq(1)").text());
  $("#customer_address_input").val($(elem).find("td:eq(2)").text());
  $("#customer_salary_input").val($(elem).find("td:eq(3)").text());
}

const generateCustomerID = () => {
  let customer = getAllCustomers();
  //   var last = customerData[customerData.length - 1];
  let newID;
  const newIDNum =
    parseInt(
      customer[customer.length - 1].getCustomerID().match(".{3}$", "")[0]
    ) + 1;

  if (newIDNum < 10) {
    newID = `C00-00${newIDNum}`;
  }
  if (newIDNum >= 10 && newIDNum < 100) {
    newID = `C00-0${newIDNum}`;
  }
  //   newID = newIDNum + "sd";
  //   console.log(newID);

  $("#customer_id_input").val(newID);

  return newID;
};
function getAllCustomers() {
  return customerData;
}

function loadAllCustomers() {
  let customer = getAllCustomers();
  //   console.log(customer.length);
  $("#customer_total").text(customer.length);
}

$("#customer_id_input").keyup(function (e) {
  $(this).val() == generateCustomerID();
});

$("#customer_name_input").keyup(function (e) {
  const pattern = /^[a-zA-Z ]{7,}$/;
  if (pattern.test($(this).val())) {
    $(".customer_warning_name").css({
      display: "none",
      color: "red",
    });
    disableSaveButton("remove");
  } else {
    $(".customer_warning_name").css({
      display: "",
      color: "red",
    });
    disableSaveButton("add");
  }
});

$("#customer_address_input").keyup(function (e) {
  const pattern = /^[a-zA-Z0-9 \W]{10,}$/;
  if (pattern.test($(this).val())) {
    $(".customer_warning_address").css({
      display: "none",
      color: "red",
    });
    disableSaveButton("remove");
  } else {
    $(".customer_warning_address").css({
      display: "",
      color: "red",
    });
    disableSaveButton("add");
  }
});

$("#customer_salary_input").keyup(function (e) {
  const pattern = /^[0-9.-]*$/;
  if (pattern.test($(this).val())) {
    $(".customer_warning_salary").css({
      display: "none",
      color: "red",
    });
    disableSaveButton("remove");
  } else {
    $(".customer_warning_salary").css({
      display: "",
      color: "red",
    });
    disableSaveButton("add");
  }
});

$(".customer-form_button__save").click(function (e) {
  saveCustomer(
    $("#customer_id_input").val(),
    $("#customer_name_input").val(),
    $("#customer_address_input").val(),
    $("#customer_salary_input").val()
  );

  e.preventDefault();
});

function disableSaveButton(val) {
  if (val == "add") {
    $(".customer-form_button__save").addClass("disable-btn");
  }
  if (val == "remove") {
    $(".customer-form_button__save").removeClass("disable-btn");
  }
}

function clearCustomerFields() {
  $("#customer_id_input").val(""),
    $("#customer_name_input").val(""),
    $("#customer_address_input").val(""),
    $("#customer_salary_input").val("");
}

const saveCustomer = (id, name, address, salary) => {
  let customer = new CustomerDTO();
  customer.setCustomerID(id);
  customer.setCustomerName(name);
  customer.setCustomerAddress(address);
  customer.setCustomerSalary(salary);
  customerData.push(customer);

  $(".customer-tbl__body").text("");

  renderCustomerTable();
  clearCustomerFields();
  generateCustomerID();
};

const searchCustomer = (id) => {
  let customer = getAllCustomers();
  for (var i in customer) {
    if (customer[i].getCustomerID() == id) return customer[i];
  }
  return null;
};

$(".customer-form_button__update").click(function (e) {
  const upCustomer = searchCustomer($("#customer_id_input").val());
  e.preventDefault();
  if (upCustomer == null) {
    alert("Customer Not Found");
  } else {
    upCustomer.setCustomerName($("#customer_name_input").val());
    upCustomer.setCustomerAddress($("#customer_address_input").val());
    upCustomer.setCustomerSalary($("#customer_salary_input").val());
    $(".customer-tbl__body").text("");
    renderCustomerTable();
  }
  clearCustomerFields();
  generateCustomerID();
});

$(".customer-form_button__remove").click(function (e) {
  const deleteCustomer = searchCustomer($("#customer_id_input").val());
  e.preventDefault();
  if (deleteCustomer == null) {
    alert("Customer Not Found");
  } else {
    const index = customerData.indexOf(deleteCustomer);
    customerData.splice(index, 1);
    $(".customer-tbl__body").text("");
    renderCustomerTable();
  }
  clearCustomerFields();
  generateCustomerID();
});

// iif
(() => {
  const customerTempData = [
    {
      id: "C00-001",
      name: "nimal shantha",
      address: "colombo road,galle",
      salary: "40000.00",
    },
    {
      id: "C00-002",
      name: "kamal gunarathana",
      address: "255/piliyandala",
      salary: "20000.00",
    },
  ];
  savePreCustomer(customerTempData);
  renderCustomerTable();
  generateCustomerID();
  loadAllCustomers();
  $(".customer_warning_name").css({
    display: "none",
  });
  $(".customer_warning_address").css({
    display: "none",
  });
  $(".customer_warning_salary").css({
    display: "none",
  });
  $(".customer-form_button__save").addClass("disable-btn");
  $("#customer_name_input").focus();
})();
