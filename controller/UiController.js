let sidenavValue = false;
let searchBoxValue = false;
const sidenavChange = (sidenavValue) => {
  $("#side_nav").css("display", sidenavValue ? "" : "none");
};

$("#side_nav").click(function (e) {
  sidenavValue = !sidenavValue;

  sidenavChange(sidenavValue);
});

$("#sidemenu_change").click(function (e) {
  sidenavValue = !sidenavValue;
  sidenavChange(sidenavValue);
});

$("#search_icon").click(function (e) {
  searchBoxValue = !searchBoxValue;
  searchBarShow(searchBoxValue);
});

//components change

const changeComponentMain = (name) => {
  const list = ["dashboard", "customer", "item", "order"];
  list.forEach((el) => {
    if (el === name) {
      $(`.${name}`).css("display", "");
      $(`.components-main_btn__${name}`).css("backgroundColor", "#7367f0");
    } else {
      $(`.${el}`).css("display", "none");
      $(`.components-main_btn__${el}`).css("backgroundColor", "");
    }
  });
};

const changeComponentSwitch = (name) => {
  switch (name) {
    case "dashboard":
      changeComponentMain(name);
      break;
    case "customer":
      changeComponentMain(name);
      break;
    case "item":
      changeComponentMain(name);
      break;
    case "order":
      changeComponentMain(name);
      break;

    default:
      changeComponentMain("dashboard");
      break;
  }
};

$(".components-main_btn").click(function (e) {
  changeComponentSwitch($(this).attr("data-name"));
});

$(window).on("keydown", function (e) {
  if (e.keyCode == 9) e.preventDefault();
});
// iif

(() => {
  changeComponentMain("order");
  sidenavChange(sidenavValue);
})();
