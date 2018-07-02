var firstAction = document.getElementsByClassName("pv-s-profile-actions__label")[0].innerText;
function confirm() {
  setTimeout(() => {
    document.getElementsByClassName("send-invite__actions")[0].getElementsByClassName("button-primary-large ml1")[0].click();
  }, 510);
}
function clickConnect() {
  setTimeout(() => {
    var listItems = document.getElementsByClassName("pv-s-profile-actions__overflow-dropdown artdeco-dropdown-menu")[0].getElementsByTagName("li");
    for (i = 0; i < listItems.length; i++) {
      var inText = /Connect/.test(listItems[i].innerText);
      if (inText === true) {
        listItems[i].getElementsByTagName("button")[0].click();
      }
    }
  }, 303);
}
if (firstAction != "Connect") {
  var openDialog = new Promise(resolve => {
    resolve(document.getElementsByClassName("pv-s-profile-actions__overflow-toggle pv-top-card-section__inline-overflow-button button-secondary-large-muted mt2")[0].click());
  });
  openDialog.then(clickConnect()).then(confirm())
} else {
  var openCon = new Promise(resolve => {
    resolve(document.getElementsByClassName("pv-s-profile-actions__label")[0].click());
  });
  openCon.then(confirm());
}
