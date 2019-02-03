//////////////login admin///////////////
/*localStorage.setItem("adminAccount",JSON.stringify(["admin","admin"]))*/
function actionLoginAdmin() {
  var adminLogin = JSON.parse(localStorage.getItem("adminAccount"));
  if (
    document.getElementById("exampleInputEmail").value &&
    document.getElementById("exampleInputEmail").value
  ) {
    if (
      document.getElementById("exampleInputEmail").value === adminLogin[0] &&
      document.getElementById("exampleInputEmail").value === adminLogin[1]
    ) {
      window.location.href = "../";
    } else {
      alert("incorrect account name or password");
    }
  }
}

///////////////decoonxtion/////////////

function decAdmin() {
  window.location.href = "loginAdmin.html";
}

////////////////////////////mod password and login

function modAdmin() {
  var loginAdmin = JSON.parse(localStorage.getItem("adminAccount"));
  loginAdmin[0] = document.getElementById("chandeLogin").value;
  loginAdmin[1] = document.getElementById("changePass").value;
  localStorage.setItem("adminAccount", JSON.stringify(loginAdmin));
  window.location.href = "main.html";
}

////////////////////////adding RH ////////////////////////

function actionAddRh() {
  var tabRh = JSON.parse(localStorage.getItem("tabRh")) || [];

  if (document.getElementById("").value && document.getElementById("").value) {
    var object = {
      name: document.getElementById("nomEmploye").value,
      prenom: document.getElementById("prenomEmploye").value,
      occupation: "Human Ressources",
      salaire: "1500",
      password: document.getElementById("exampleInputPassword1").value,
      id: document.getElementById("cinEmploye").value
    };
  }
  tabRh.push(object);
  localStorage.setItem("tabRh", JSON.stringify(tabRh));
}

////////////////// affichage RH///////////////

function affRh() {
  var tabRh = JSON.parse(localStorage.getItem("tabRh")) || [];

  for (let i = 0; i < tabRh.length; i++) {
    var html = "";
    html += "<tr><td>";
    html += tabRh[i].name + "</td>";
    html += "<td>" + tabRh[i].prenom + "</td>";
    html += "<td>" + tabRh[i].salaire + "</td>";
    html += "<td>" + tabRh[i].password + "</td>";
    html +=
      "<button class='btn' onclick='modRh(" +
      tabRh[i].id +
      ")'>modifier</button>" +
      "<button class='btn pl-2' onclick='supRh(" +
      tabRh[i].id +
      ")'>supprime</button></td></tr>";

    html += "</tr>";

    document.getElementById("RHAffichage").innerHTML += html;
  }
}

//////////////////////del and mod RH///////////////

function modRh(idd) {
  var tabRh = JSON.parse(localStorage.getItem("tabRh"));

  for (let i = 0; i < tabRh.length; i++) {
    if (tabRh[i].id == idd) {
      window.location.href = "addEmploye.html";

      document.getElementById("nomEmploye").value = tabRh[i].nom;
      document.getElementById("prenomEmploye").value = tabRh[i].prrenom;
      document.getElementById("cinEmploye").value = tabRh[i].cin;
      document.getElementById("exampleInputPassword1").value =
        tabRh[i].password;
    }
    tabRh.splice(i, 1);
    localStorage.setItem("tabRh", JSON.stringify(tabRh));
  }
}

function supRh(idd) {
  var tabRh = JSON.parse(localStorage.getItem("tabRh"));

  for (let i = 0; i < tabRh.length; i++) {
    if (tabRh[i].id == idd) {
      tabRh.splice(i, 1);
      localStorage.setItem("tabRh", JSON.stringify(tabRh));
    }
  }
}

//////////////////////////////afff employeee

function affEmploye() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
  for (let i = 0; i < employeList.length; i++) {
    var html = "";
    html +=
      "<tr><td>" +
      employeList[i].nom +
      "</td><td>" +
      employeList[i].prenom +
      "</td><td>" +
      employeList[i].cin +
      "</td><td>";
    html += employeList[i].occupation + "</td><td></tr>";

    document.getElementById("affemA").innerHTML += html;
  }
}

//////////////////////message///

function sendMessage() {
  var message = document.getElementById("exampleFormControlTextarea1").value;
  if (
    document.getElementById("exampleRadios1").checked &&
    document.getElementById("exampleRadios2").checked
  ) {
    var object1 = {
      title: document.getElementById('titleM').value,
      msg: message,
      id: Date.now()
    };
    var tab1 = localStorage.getItem("messageAdminToAll") || [];
    tab.push(object1);
    localStorage.setItem("messageAdminToAll", JSON.stringify(tab1));
  }
  if (document.getElementById("exampleRadios2").checked) {
    var object2 = {
      title: document.getElementById('titleM').value,
      msg: message,
      id: Date.now()
    };
    var tab2 = localStorage.getItem("messageAdminToRh") || [];
    tab.push(object2);
    localStorage.setItem("messageAdminToRh", JSON.stringify(tab2));
  }
  if (document.getElementById("exampleRadios1").checked) {
    var object3 = {
      msg: message,
      title: document.getElementById('titleM').value,
      id: Date.now()
    };
    var tab3 = localStorage.getItem("messageAdminToEmploye") || [];
    tab.push(object3);
    localStorage.setItem("messageAdminToEmploye", JSON.stringify(tab3));
  }
}