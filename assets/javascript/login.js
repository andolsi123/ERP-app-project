var tabRh = JSON.parse(localStorage.getItem("tabRh"));

var tabEmploye = JSON.parse(localStorage.getItem("tabEmploye"));

function actionLogin() {
  if (document.getElementById("exampleRadios1").checked) {
    for (let i = 0; i < tabRh.length; i++) {
      console.log(tabRh[i].id)
      console.log(document.getElementById("exampleInputEmail1").value )
      console.log(tabRh[i].password)
      console.log(document.getElementById("exampleInputPassword1").value)
      if (
        tabRh[i].id === document.getElementById("exampleInputEmail1").value &&
        tabRh[i].password ===
          document.getElementById("exampleInputPassword1").value
      ) {
        console.log('true');
        localStorage.setItem("tabLoginRh", tabRh[i].id);
        window.location.href = "Rh/mainMenu.html";
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
        localStorage.setItem("tabLoginEmploye",tabEmploye[i].cin);
        window.location.href = "Employées/Home.html";
        break;
      }
    }
  }
}