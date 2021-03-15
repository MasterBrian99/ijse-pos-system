const custmerList = [
  {
    NIC: "132424243242",
    fName: "Bill",
    lName: "gates",
    city: "Colombo",
  },
  {
    NIC: "132424243242",
    fName: "Bill",
    lName: "gates",
    city: "Colombo",
  },
];

$("#add_customer").click(function (e) {
  console.log("asd");
  const customer = {
    NIC: $("#CustomerNIC").val(),
    fName: $("#CustomerFirst_name").val(),
    lName: $("#CustomerLast_name").val(),
    city: $("#CustomerCity").val(),
  };
  $("#customer_tbl tr").remove();
  custmerList.push(customer);
  renderCustomerTable();
  $("#CustomerNIC").val("");
  $("#CustomerFirst_name").val("");
  $("#CustomerLast_name").val("");
  $("#CustomerCity").val("");
});

const renderCustomerTable = () => {
  custmerList.forEach((e, i) => {
    let tblData = `<tr  onclick="changeIncidentValue(this)"> 
              <th scope="row">${i + 1}</th>
              <td>${e.NIC}</td>
              <td>${e.fName}</td>
              <td>${e.lName}</td>
              <td>${e.city}</td>
            </tr>`;

    $("#customer_tbl").append(tblData);

    // console.lo   g(tblData);
  });
};

$("#customer_click").click(function (e) {
  $("#home_section").css("display", "none");
  $("#customer_section").css("display", "");
});

$("#home_click").click(function (e) {
  $("#home_section").css("display", "");

  $("#customer_section").css("display", "none");
});

// $("#customer_tbl tr").click(function () {
//   $(this).find("td", function () {
//     console.log($(this).html());
//   });
// });

function changeIncidentValue(elem) {
  $("#CustomerNIC").val($(elem).find("td:eq(0)").text());
  $("#CustomerFirst_name").val($(elem).find("td:eq(1)").text());
  $("#CustomerLast_name").val($(elem).find("td:eq(2)").text());
  $("#CustomerCity").val($(elem).find("td:eq(3)").text());
}

(function () {
  renderCustomerTable();
  // some code…
  $("#customer_section").css("display", "none");
})();
