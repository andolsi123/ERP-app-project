/////////////////deconnection

///////"blue | azure | green | orange | red | purple"

function actionDconnect() {
  localStorage.setItem("tabLoginRh", "");
  window.location.href = "login.html";
}

////////////////////////////addding a new employe

function actionAdd() {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
  let selected;
  if (localStorage.getItem("editEmploye")) {
    for (let i = 0; i < employeList.length; i++) {
      if (localStorage.getItem("editEmploye") === employeList[i].cin) {
        for (let i = 0; i < 5; i++) {
          if (
            document
              .getElementById("exampleFormControlSelect1")
              .getElementsByTagName("option")[i].selected
          ) {
            let selectedOccupation = document
              .getElementById("exampleFormControlSelect1")
              .getElementsByTagName("option")[i].value;
            selected = selectedOccupation;
          }
        }
        let employeObjectUpdate = {
          nom: document.getElementById("nomEmploye").value,
          prenom: document.getElementById("prenomEmploye").value,
          cin: document.getElementById("cinEmploye").value,
          occupation: selected,
          password: document.getElementById("exampleInputPassworde").value,
          salaire: document.getElementById("employeSalaire").value,
          salaireF: 0
        };
        employeList[i] = employeObjectUpdate;
      }
      localStorage.removeItem("editEmploye");
      localStorage.setItem("tabEmploye", JSON.stringify(employeList));
      window.location.href = "gestionDesEmploye.html";
    }
  } else {
    for (let i = 0; i < 5; i++) {
      if (
        document
          .getElementById("exampleFormControlSelect1")
          .getElementsByTagName("option")[i].selected
      ) {
        let selectedOccupation = document
          .getElementById("exampleFormControlSelect1")
          .getElementsByTagName("option")[i].value;
        selected = selectedOccupation;
      }
    }
    let employeObject = {
      nom: document.getElementById("nomEmploye").value,
      prenom: document.getElementById("prenomEmploye").value,
      cin: document.getElementById("cinEmploye").value,
      occupation: selected,
      password: document.getElementById("exampleInputPassworde").value,
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
      window.location.href = "gestionDesEmploye.html";
    }
  }
}

////////////////////////affichage des employe/////////////

function affEmploye() {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
  for (let i = 0; i < employeList.length; i++) {
    let html = "";
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
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin == id) {
      localStorage.setItem("editEmploye", employeList[i].cin);
      window.location.href = "addEmploye.html";
      break;
    }
  }
}

function modEm() {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  let edit = localStorage.getItem("editEmploye");
  if (edit) {
    for (let i = 0; i < employeList.length; i++) {
      if (employeList[i].cin === edit) {
        document.getElementById("nomEmploye").value = employeList[i].nom;
        document.getElementById("prenomEmploye").value = employeList[i].prenom;
        document.getElementById("cinEmploye").value = employeList[i].cin;
        document.getElementById("exampleInputPassworde").value =
          employeList[i].password;
        document.getElementById("employeSalaire").value =
          employeList[i].salaire;

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
  }
}

function supEmploye(id) {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));

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
  let congeTab = JSON.parse(localStorage.getItem("tabConge")) || [];
  for (let i = 0; i < congeTab.length; i++) {
    if (congeTab[i].confirmation === false) {
      let html3 = "";
      html3 += "<div class='row mt-2>";
      html3 += "<div class='col-4'>";
      html3 += "<p> reason:" + congeTab[i].reason + "</p></br>";
      html3 +=
        "<h3>For a period of  :" + " " + congeTab[i].period + " " + "Days</h3>";
      html3 += "<h4>From :" + congeTab[i].start + "</h4>";
      html3 += "<h4>To :" + congeTab[i].end + "</h4>";
      html3 +=
        "<button onclick='confConger(" +
        congeTab[i].congeId +
        "," +
        congeTab[i].id +
        ")'>confirmation</button>" +
        "<button onclick='delConger(" +
        congeTab[i].congeId +
        "," +
        congeTab[i].id +
        ")'>decline</button>";
      html3 += "</div>";
      document.getElementById("mainConge").innerHTML += html3;
    }
  }
}

////////////////////////////////////// decliner confirmer conge///////

function confConger(congeId, id) {
  let congeTab = JSON.parse(localStorage.getItem("tabConge")) || [];
  for (let i = 0; i < congeTab.length; i++) {
    if (congeTab[i].id == id) {
      congeTab[i].confirmation = true;
      localStorage.setItem("tabConge", JSON.stringify(congeTab));
    }
  }
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].id === id) {
      let tab = localStorage.getItem("sendEmploye") || [];
      let object = {
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

function delConger(congeId, id) {
  var employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].id === id) {
      let tab = localStorage.getItem("sendEmploye") || [];
      let object = {
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
  let recTab = JSON.parse(localStorage.getItem("tabRec"));
  if (recTab) {
    for (let i = 0; i < recTab.length; i++) {
      let html4 = "";
      html4 += "<div class='row'>";
      html4 += "<div class='col-4'>";
      html4 += "<h3>" + recTab[i].reason + "</h3>";
      html4 +=
        "<p class='mt-2 mb-2 font-weight-light'>" + recTab[i].deatil + "</p>";
      html4 +=
        "<button onclick='confRec(" +
        recTab[i].ide +
        "," +
        recTab[i].recId +
        ")'>confirmer</button>" +
        "<button onclick='delRec(" +
        recTab[i].ide +
        "," +
        recTab[i].recId +
        ")'>decliner</button>";
      html4 += "</div>";
      document.getElementById("mainRec").innerHTML += html4;
    }
  }
}

///////////////////////////////////////recc decliner + confirmer

function confRec(ide, recId) {
  let recTab = JSON.parse(localStorage.getItem("tabRec"));
  for (let i = 0; i < recTab.length; i++) {
    if (recTab[i].recId == recId) {
      recTab[i].confirmation = true;
      localStorage.setItem("tabRec", JSON.stringify(recTab));
    }
  }

  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin === ide) {
      let tab = JSON.parse(localStorage.getItem("sendEmploye")) || [];
      let object = {
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

function delRec(ide, idRec) {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    if (employeList[i].cin === ide) {
      let tab = JSON.parse(localStorage.getItem("sendEmploye")) || [];
      let object = {
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
  let employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];

  for (let i = 0; i < employeList.length; i++) {
    let html5 = "";
    html5 = "<option>" + employeList[i].nom + "</option>";
    document.getElementById("selectAbsent").innerHTML += html5;
  }
}

function actionAbsent() {
  let absentDate = document.getElementById("absentDate").value;
  let employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
  let tabPresence = JSON.parse(localStorage.getItem("tabPresence")) || [];
  let date = new Date();
  let select = document
    .getElementById("selectAbsent")
    .getElementsByTagName("option");
  for (let i = 0; i < employeList.length; i++) {
    for (let slct of select) {
      if (slct.innerText === employeList[i].nom && slct.selected) {
        if (absentDate) {
          let objectPresence = {
            id: employeList[i].cin,
            date: absentDate,
            month: date.getMonth()
          };
          employeList[i].salaireF += 1;
          tabPresence.push(objectPresence);
        }
      }
    }
  }
  localStorage.setItem("tabEmploye", JSON.stringify(employeList));
  localStorage.setItem("tabPresence", JSON.stringify(tabPresence));
}

//////////////////////////////affichage salaire//////////////

function affSalaire() {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));

  for (let i = 0; i < employeList.length; i++) {
    let html2 = "";
    html2 += "<tr><td>";
    html2 += employeList[i].nom + " " + employeList[i].prenom + "</td>";
    html2 += "<td>" + employeList[i].salaire + "</td>";
    html2 +=
      "<td>" +
      (parseInt(employeList[i].salaire) - employeList[i].salaireF * 10) +
      "</td>";
    html2 += "</tr>";

    document.getElementById("saliare").innerHTML += html2;
  }
}

/////////////////////////account///////////////

function accountRh() {
  let account = localStorage.getItem("tabLoginRh");
  let employe = JSON.parse(localStorage.getItem("tabRh"));

  for (let i = 0; i < employe.length; i++) {
    if (employe[i].id == account) {
      let html = "";
      html += "<tr><td>" + employe[i].name + "</td><td>";
      html += employe[i].prenom + "</td>";
      html += "<td>" + employe[i].salaire + "</td>";
      html += "<td>" + employe[i].id + "</td><td>";
      html += employe[i].password + "</td></tr>";

      document.getElementById("accountrh").innerHTML += html;
    }
  }
}

///////////////////////////affmessage/////////////////

function affMessage() {
  let tab = JSON.parse(localStorage.getItem("messageAdminToRh")) || [];
  let html6 = "";
  for (let i = 0; i < tab.length; i++) {
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'> title :";
    html6 += tab[i].title;
    html6 += "</div></div>";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>content :";
    html6 += tab[i].msg;
    html6 += "</div></div>";

    document.getElementById("msgaff").innerHTML += html6;
  }
}

//////////////////////////message/////

function affEmployeSelect() {
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    let html5 = "";
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
  let employeList = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employeList.length; i++) {
    if (
      document
        .getElementById("selectMsgEmploye")
        .getElementsByTagName("option")[i].selected
    ) {
      let tab = JSON.parse(localStorage.getItem("sendEmploye")) || [];
      let object = {
        title: document.getElementById("title").value,
        msg: document.getElementById("exampleFormControlTextarea").value,
        id: employeList[i].cin,
        idMsg: Date.now()
      };
      tab.push(object);
      localStorage.setItem("sendEmploye", JSON.stringify(tab));
    }
  }
}
