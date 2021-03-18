let sidenavValue = false;
let searchBoxValue = false;
const sidenavChange = (sidenavValue) => {
  $("#side_nav").css("display", sidenavValue ? "" : "none");
};

(() => {
  sidenavChange(sidenavValue);
})();

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
