var indxArr = [];
for (i = 0; i < res.length; i++) {
  if (/Connect/.test(res[i].innerText) === true) {
    indxArr.push(i);
  }
}
var res = document.getElementsByClassName("search-result__actions");

function connecR(itm) {
  setTimeout(() => {
    var btn = res[itm].innerText;
    if (/Connect/.test(btn) === true) {
      var clk = new Promise(resolve => {
        resolve(res[itm].getElementsByTagName("button")[0].click());
      });

      function confirm() {
        setTimeout(() => {
          document.getElementsByClassName("button-primary-large ml1")[0].click();
        }, (itm * (100 + 303)));
      }
      clk.then(confirm())
    }
  }, (itm * (10 + 303)));
}
for (a = 0; a < indxArr.length; a++) {
  connecR(indxArr[a]);
}
