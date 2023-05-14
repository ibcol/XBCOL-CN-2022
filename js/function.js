$(document).ready(function () {
  $(".regBorder2").mouseover(function () {
    $(".regBorder2").css("background-color", "white");
    $(".colorWt2").css("color", "#0286CA");
  });
  $(".regBorder2").mouseout(function () {
    $(".regBorder2").css("background-color", "#0286CA");
    $(".colorWt2").css("color", "white");
  });
});

var visitTeamPageLinksArr = [
  "https://www.ibcol.org/2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/Carbonbase/index.html",
  "https://www.ibcol.org/2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/Golden%20Pear/index.html",
  "https://www.ibcol.org/2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/PracticeTogether/index.html",
  "https://www.ibcol.org/2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/Genie/index.html",
  "https://www.ibcol.org/2020EXPO/2020-IBCOL-Finalists/CN-12-representatives/LifeBlock/index.html",
];

function visitTeamPage(index) {
  window.open(visitTeamPageLinksArr[index - 1]);
}
