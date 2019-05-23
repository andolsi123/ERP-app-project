/////////////////deconnection employe//////

function actiondeconnect() {
  localStorage.setItem("tabLoginEmploye", "");
  window.location.href = "../login.html";
}

/////////////////////////create conge////////

function createConge() {
  let date1 = new Date(document.getElementById("dateone").value);
  let date2 = new Date(document.getElementById("datetwo").value);

  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() < date2.getDate()
  ) {
    let x = date2.getDate() - date1.getDate();
    let tab = localStorage.getItem("tabConge") || [];
    let object = {
      id: localStorage.getItem("tabLoginEmploye"),
      start: date1,
      end: date2,
      period: x,
      confirmation: false,
      reason: document.getElementById("reason").value,
      ide: localStorage.getItem("tabLoginEmploye")
    };
    tab.push(object);
    localStorage.setItem("tabConge", JSON.stringify(tab));
    alert("your request has been submitted");
  } else if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() < date2.getMonth()
  ) {
    let x = date2.getDate() + (date1.getMonth.getDate() - date1.getDate());
    let tab = localStorage.getItem("tabConge") || [];
    let object = {
      id: localStorage.getItem("tabLoginEmploye"),
      congeId: Date.now(),
      start: date1,
      end: date2,
      period: x,
      confirmation: false,
      reason: document.getElementById("reason").value,
      ide: localStorage.getItem("tabLoginEmploye")
    };
    tab.push(object);
    localStorage.setItem("tabConge", JSON.stringify(tab));
    alert("your request has been submitted");
  } else {
    alert("your input is invalid");
  }
}

////////////////////////create reclamation///////////////

function createRec() {
  if (
    document.getElementById("recReason").value &&
    document.getElementById("recText").value
  ) {
    let object = {
      recId: Date.now(),
      id: localStorage.getItem("tabLoginEmploye"),
      reason: document.getElementById("recReason").value,
      deatil: document.getElementById("recText").value,
      confirmation: false,
      ide: localStorage.getItem("tabLoginEmploye")
    };
    let recTab = JSON.parse(localStorage.getItem("tabRec")) || [];
    recTab.push(object);
    localStorage.setItem("tabRec", JSON.stringify(recTab));
    alert("your complaint has been submitted");
  } else {
    alert("Fill all the fields");
  }
}

//////////////////////affichage liste de presence/////////////

function affP() {
  let login = localStorage.getItem("tabLoginEmploye");
  let tabP = JSON.parse(localStorage.getItem("tabPresence")) || [];
  let html6;

  for (let j = 0; j < tabP.length; j++) {
    if (tabP[j].id === login) {
      html6 += "<div class='row'>";
      html6 += "<div class='col-4'>";
      html6 += "<p>Absent Date: " + tabP[j].date + "</p>";
      html6 += "</div></div>";
      document.getElementById("employePresenceAff").innerHTML += html6;
    }
  }
}

//////////////////////////affichage salire///////////////////////

function salairAff() {
  let login = localStorage.getItem("tabLoginEmploye") || [];
  let employe = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === login) {
      let html = "";
      html +=
        "<div class='container'><div class='row'><h6>Your salary this month will be:</h6><p>" +
        (parseInt(employe[i].salaire) - employe[i].salaireF * 10) +
        "</p></div></div>";

      document.getElementById("employeSalaireAff").innerHTML += html;
    }
  }
}

///////////////////////////////accountt

function accountEmploye() {
  let account = localStorage.getItem("tabLoginEmploye");
  let employe = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === account) {
      let html = "";
      html += "<tr><td>" + employe[i].nom + "</td><td>";
      html += employe[i].prenom + "</td>";
      html += "<td>" + employe[i].occupation + "</td>";
      html += "<td>" + employe[i].salaire + "</td>";
      html += "<td>" + employe[i].cin + "</td><td>";
      html += employe[i].password + "</td></tr>";

      document.getElementById("accountEmploye").innerHTML += html;
    }
  }
}

////////////////////////affmessage///////////

function affMesg() {
  let tab2 = JSON.parse(localStorage.getItem("messageAdminToEmploye")) || [];
  var tab = JSON.parse(localStorage.getItem("sendEmploye")) || [];
  let html6 = "";
  let html = "";
  let login = localStorage.getItem("tabLoginEmploye");
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].id === login) {
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "title :" + tab[i].title;
    html6 += "</div></div>";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "content :" + tab[i].msg;
    html6 += "</div></div>";
    document.getElementById("affMsg").innerHTML += html6;
    }
  }

  for (let i = 0; i < tab2.length; i++) {
    html += "<div class='row'>";
    html += "<div class='col-4'>";
    html += "title :" + tab2[i].title;
    html += "</div></div>";
    html += "<div class='row'>";
    html += "<div class='col-4'>";
    html += "content :" + tab2[i].msg;
    html += "</div></div>";
    document.getElementById("affMsgSelect").innerHTML += html;
  }
}
