/////////////////deconnection

///////"blue | azure | green | orange | red | purple"

document
  .getElementById("btnDconnection")
  .addEventListener("click", actionDconnect);

function actionDconnect() {
  localStorage.setItem("tabLoginRh", "");
  window.location.href = "login.html";
}

////////////////////////////addding a new employe

function actionAdd() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
  for (let i = 0; i < 5; i++) {
    if (
      document
        .getElementById("exampleFormControlSelect1")
        .getElementsByTagName("option")[i].selected
    ) {
      var selectedOccupation = document
        .getElementById("exampleFormControlSelect1")
        .getElementsByTagName("option")[i].value;
    }
  }
  var employeObject = {
    nom: document.getElementById("nomEmploye").value,
    prenom: document.getElementById("prenomEmploye").value,
    cin: document.getElementById("cinEmploye").value,
    occupation: selectedOccupation,
    password: document.getElementById("exampleInputPassword1").value,
    salaire: document.getElementById("employeSalaire").value,
    salaireF: 0
  };
  if (
    employeObject.nom &&
    employeObject.prenom &&
    employeObject.cin &&
    employeObject.occupation
  ) {
    employeList.push(employeObject);
    localStorage.setItem("tabEmploye", JSON.stringify(employeList));
  }

  window.location.href = "gestionDesEmploye.html";
}

////////////////////////affichage des employe/////////////

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
    html += employeList[i].occupation + "</td><td>";
    html +=
      "<button class='btn' onclick='modEmploye(" +
      employeList[i].cin +
      ")'>modifier</button>" +
      "<button class='btn' onclick='supEmploye(" +
      employeList[i].cin +
      ")'>supprime</button></td></tr>";

    document.getElementById("employeAffichage").innerHTML += html;
  }
}

////////////////////edit and delet employe

function modEmploye(id) {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin == id) {
      modEm(employeList[i].cin);
      break;
    }
  }
}

function modEm(id) {
  window.location.href = "addEmploye.html";
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin === id) {
      document.getElementById("nomEmploye").value = employeList[i].nom;
      document.getElementById("prenomEmploye").value = employeList[i].prenom;
      document.getElementById("cinEmploye").value = employeList[i].cin;
      document.getElementById("exampleInputPassword1").value =
        employeList[i].password;
      document.getElementById("employeSalaire").value = employeList[i].salaire;

      for (let j = 0; j < 5; j++) {
        if (
          employeList[i].occupation ===
          document
            .getElementById("exampleFormControlSelect1")
            .getElementsByTagName("option")[j].value
        ) {
          document
            .getElementById("exampleFormControlSelect1")
            .getElementsByTagName("option")[j].selected;
        }
      }
    }
  }
  employeList.splice(i, 1);
  localStorage.setItem("tabEmploye", JSON.stringify(employeList));
}

function supEmploye(id) {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin == id) {
      employeList.splice(i, 1);
      localStorage.setItem("tabEmploye", JSON.stringify(employeList));
    }
  }
  window.location.href = "gestionDesEmploye.html";
}

////////////affffichage congee/////////////

function affConge() {
  var congeTab = JSON.parse(localStorage.getItem("tabConge")) || [];
  for (let i = 0; i < congeTab.length; i++) {
    var html3 = "";
    html3 += "<div class='row mt-2>";
    html4 += "<div class='col-4'>";
    html3 += "<p> reason:" + congeTab[i].reason + "</p></br>";
    html3 +=
      "<h3>For a period of  :" + " " + congeTab[i].period + " " + "Days</h3>";
    html3 += "<h4>From :" + congeTab[i].start + "</h4>";
    html3 += "<h4>To :" + congeTab[i].end + "</h4>";

    html3 +=
      "<button onclick='confConger(" +
      congeTab[i].congeId +
      ")'>confirmation</button>" +
      "<button onclick='delConger(" +
      congeTab[i].congeId +
      ")'>decline</button>";
    html3 += "</div>";
    document.getElementById("mainConge").innerHTML += html3;
  }
}

////////////////////////////////////// decliner confirmer conge///////

function confConger(idd) {
  var congeTab = JSON.parse(localStorage.getItem("tabConge")) || [];

  for (let i = 0; i < congeTab.length; i++) {
    if (congeTab[i].id == idd) {
      congeTab[i].confirmation = true;
    }
  }

  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i] === id) {
      var tab = localStorage.getItem("sendEmploye") || [];
      var object = {
        title: "vacation",
        msg: "Your request has been accepted",
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
}

function delConger(idd) {
  var congeTab = JSON.parse(localStorage.getItem("tabConge")) || [];

  for (let i = 0; i < congeTab.length; i++) {
    if (congeTab[i].id == idd) {
      congeTab[i].confirmation = false;
    }
  }

  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i] == id) {
      var tab = localStorage.getItem("sendEmploye") || [];
      var object = {
        title: "vacation",
        msg: "Your request has been declined",
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
}

///////////////////////afffichage reclamation ///////////

function affRec() {
  var recTab = JSON.parse(localStorage.getItem("tabRec")) || [];
  for (let i = 0; i < recTab.length; i++) {
    var html4 = "";
    html4 += "<div class='row'>";
    html4 += "<div class='col-4'>";
    html4 += "<h3>" + recTab[i].reason + "</h3>";
    html4 +=
      "<p class='mt-2 mb-2 font-weight-light'>" + recTab[i].text + "</p>";
    html4 +=
      "<button onclick='confRec(" +
      recTab[i].recId +
      ")'>confirmer</button>" +
      "<button onclick='delRec(" +
      recTab[i].recId +
      ")'>decliner</button>";
    html4 += "</div>";
    document.getElementById("mainRec").innerHTML += html4;
  }
}

///////////////////////////////////////recc decliner + confirmer

function confRec(id) {
  for (let i = 0; i < recTab.length; i++) {
    if (recTab[i].id == id) {
      recTab[i].confirmation = true;
    }
  }

  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i] === id) {
      var tab = localStorage.getItem("sendEmploye") || [];
      var object = {
        title: "vacation",
        msg: "Your request has been accepted",
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
}
function delRec(id) {
  for (let i = 0; i < recTab.length; i++) {
    if (recTab[i].id == id) {
      recTab[i].confirmation = false;
    }
  }

  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i] === id) {
      var tab = localStorage.getItem("sendEmploye") || [];
      var object = {
        title: "vacation",
        msg: "Your request has been declined",
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
}

/////////////////////gestion des pesences//////

function affPresence() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];

  for (let i = 0; i < employeList.length; i++) {
    html5 = "";
    html5 =
      "<option>" +
      employeList[i].nom +
      " " +
      employeList[i].prenom +
      "</option>";
    document.getElementById("selectAbsent").innerHTML += html5;
  }

  for (let i = 0; i < employeList.length; i++) {
    if (
      document.getElementById("selectAbsent").getElementsByTagName("option")[i]
        .selected
    ) {
      var tabP = JSON.parse(localStorage.getItem("tabPresence")) || [];
      for (let j = 0; j < tabP.length; j++) {
        if (tabP[j].id === employeList[i].cin) {
          html6 = "";
          html6 += "<div class='row'>";
          html6 += "<div class='col-4'>";
          html6 += tabP[j].absentDate;
          html6 += "</div></div>";

          document.getElementById("absentList").innerHTML += html6;
        }
      }
    }
  }
}

function actionAbsent() {
  var absentDate = document.getElementById("absentDate").value;
  var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];

  for (let i = 0; i < employeList.length; i++) {
    if (
      document.getElementById("selectAbsent").getElementsByTagName("option")[i]
        .selected
    ) {
      if (absentDate) {
        var objectPresence = {
          id: employeList[i].cin,
          date: absentDate,
          month: Date.getMonth()
        };
        var tab = JSON.parse(localStorage.getItem("tabPresence")) || [];
        tab.push(objectPresence);
        localStorage.setItem("tabPresence", JSON.stringify(tab));
      }
    }
    if (Date.getDate() === 1) {
      employeList[i].salaireF = 0;
    }
    employeList[i].salaireF += 1;
  }
}

//////////////////////////////affichage salaire//////////////

function affSalaire() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];

  for (let i = 0; i < employeList.length; i++) {
    var html2 = "";
    html2 += "<tr><td>";
    html2 += employeList[i].nom + " " + employeList[i].prenom + "</td>";
    html2 += "<td>" + employeList[i].salire + "</td>";
    html2 +=
      "<td>" +
      employeList[i].salire -
      employeList[i].salaireF * 10 +
      "</td></tr>";

    document.getElementById("saliare").innerHTML += html2;
  }
}

/////////////////////////account///////////////

function accountRh() {
  var account = localStorage.getItem("tabLoginRh") || [];
  var employe = JSON.parse(localStorage.getItem("tabRh")) || [];
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === account) {
      var html = "";
      html += "<tr><td>" + employe[i].name + "</td><td>";
      html += employe[i].prenom + "</td>";
      html += "<td>" + employe[i].id + "</td><td>";
      html += employe[i].password + "</td></tr>";

      document.getElementById("accountrh").innerHTML += html;
    }
  }
}

///////////////////////////affmessage

function affMessage() {
  var tab = localStorage.getItem("messageAdminToRh") || [];
  for (i < tab.length; (i = 0); i--) {
    html6 = "";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "title :" + tab[i].title;
    html6 += "</div></div>";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "content :" + tab[i].msg;
    html6 += "</div></div>";

    document.getElementById("msgaff").innerHTML += html6;
  }
}

//////////////////////////message/////

function affEmployeSelect() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    html5 = "";
    html5 =
      "<option>" +
      employeList[i].nom +
      " " +
      employeList[i].prenom +
      "</option>";
    document.getElementById("selectMsgEmploye").innerHTML += html5;
  }
}

function sendEmployeMessage() {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (
      document
        .getElementById("selectMsgEmploye")
        .getElementsByTagName("option")[i].selected
    ) {
      var tab = localStorage.getItem("sendEmploye") || [];
      var object = {
        title: document.getElementById("title").value,
        msg: document.getElementById("exampleFormControlTextarea").value,
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
  if (document.getElementById("exampleRadios").checked) {
    var tab2 = localStorage.getItem("sendAllEmploye") || [];
    var object2 = {
      title: document.getElementById("title").value,
      msg: document.getElementById("exampleFormControlTextarea").value,
      idMsg: Date.now()
    };
    tab2.push(object2);
    localStorage.setItem("sendEmploye", JSON.stringify(tab2));
  }
}