document.getElementById("btnLogin").addEventListener("click", actionLogin);

var tabRh = JSON.parse(localStorage.getItem("tabRh"));

var tabEmploye = JSON.parse(localStorage.getItem("tabEmploye"));

function actionLogin() {
  if (document.getElementById("exampleRadios1").checked) {
    for (let i = 0; i < tabRh.length; i++) {
      if (
        tabRh[i].cin === document.getElementById("exampleInputEmail1").value &&
        tabRh[i].password ===
          document.getElementById("exampleInputPassword1").value
      ) {
        localStorage.setItem("tabLoginRh", JSON.stringify(tabRh[i].cin));
        window.location.href = "";
        break;
      }
    }
  }
  if (document.getElementById("exampleRadios2").checked) {
    for (let i = 0; i < tabEmploye.length; i++) {
      if (
        tabEmploye[i].cin ===
          document.getElementById("exampleInputEmail1").value &&
        tabEmploye[i].password ===
          document.getElementById("exampleInputPassword1").value
      ) {
        localStorage.setItem(
          "tabLoginEmploye",
          JSON.stringify(tabEmploye[i].cin)
        );
        window.location.href = "";
        break;
      }
    }
  }
}