var yourmessage = "Testing the script on your profile.\nThanks!";

var personName = /^\S+/.exec(document.getElementsByClassName("pv-top-card-section__name Sans-26px-black-85%")[0].innerText);

var intro = "Hi "+personName+",\n";
var userstring = intro+"Just looking to expand my network.\nThanks, André.";

function whoopsmessage() {
  alert("whoops.. your message is too long. go back into your code and fix it.");
}

function inputString(str) {
  if (userstring.length > 299) {
    whoopsmessage();
  } else {
    return userstring;
  }
}

function clickAddMsg() {
  setTimeout(() => {
    document.getElementsByClassName("button-secondary-large mr1")[0].click();
  }, 283);
}

function insertStringToField() {
  setTimeout(() => {
    document.getElementsByClassName("modal")[0].getElementsByTagName("textarea")[0].value = inputString();
  }, 550);
}

var firstAction = document.getElementsByClassName("pv-s-profile-actions__label")[0].innerText;

function confirm() {
  setTimeout(() => {
    document.getElementsByClassName("send-invite__actions")[0].getElementsByClassName("button-primary-large ml1")[0].click();
  }, 650);
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
  }, 153);
}
if (firstAction != "Connect") {
  var openDialog = new Promise(resolve => {
    resolve(document.getElementsByClassName("pv-s-profile-actions__overflow-toggle pv-top-card-section__inline-overflow-button button-secondary-large-muted mt2")[0].click());
  });
  openDialog.then(clickConnect()).then(clickAddMsg()).then(insertStringToField()).then(confirm())
} else {
  var openCon = new Promise(resolve => {
    resolve(document.getElementsByClassName("pv-s-profile-actions__label")[0].click());
  });
  openCon.then(clickAddMsg()).then(insertStringToField()).then(confirm());
}
