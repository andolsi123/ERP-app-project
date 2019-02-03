/////////////////deconnection employe//////

function actiondeconnect() {
  localStorage.setItem("tabLoginEmploye", "");
  window.location.href = "Home.html";
}

/////////////////////////create conge////////

function createConge() {
  var date1 = new Date(document.getElementById("dateone").value);
  var date2 = new Date(document.getElementById("datetwo").value);

  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() < date2.getDate()
  ) {
    var x = date2.getDate() - date1.getDate();
    var tab = localStorage.getItem("tabConge") || [];
    var object = {
      id: localStorage.getItem("tabLoginEmploye"),
      start: date1,
      end: date2,
      period: x,
      confirmation: false,
      reason: document.getElementById("reason").value
    };
    tab.push(object);
    localStorage.setItem("tabConge", JSON.stringify(tab));
    alert("your request has been submitted");
  } else if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() < date2.getMonth()
  ) {
    var x = date2.getDate() + (date1.getMonth.getDate() - date1.getDate());
    var tab = localStorage.getItem("tabConge") || [];
    var object = {
      id: localStorage.getItem("tabLoginEmploye"),
      congeId: Date.now(),
      start: date1,
      end: date2,
      period: x,
      confirmation: false,
      reason: document.getElementById("reason").value
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
  var recTab = JSON.parse(localStorage.getItem("tabRec")) || [];
  if (
    document.getElementById("recReason").value &&
    document.getElementById("recText").value
  ) {
    var object = {
      recId: Date.now(),
      id: localStorage.getItem("tabLoginEmploye"),
      reason: document.getElementById("recReason").value,
      deatil: document.getElementById("recText").value,
      confirmation: false
    };
    recTab.push(object);
    localStorage.setItem("tabRec", JSON.stringify(recTab));
    alert("your complaint has been submitted");
  } else {
    alert("Fill all the fields");
  }
}

//////////////////////affichage liste de presence/////////////

function affP() {
  var employe = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === localStorage.getItem("tabLoginEmploye")) {
      var tabP = JSON.parse(localStorage.getItem("tabPresence")) || [];
      for (let j = 0; j < tabP.length; j++) {
        if (tabP[j].id === employe[i].cin) {
            html6 = "";
            html6 += "<div class='row'>";
            html6 += "<div class='col-4'>";
            html6 += tabP[j].absentDate + "</br>";
            html6 += "</div></div>";

            document.getElementById("employePresenceAff").innerHTML += html6;
        }
      }
    }
  }
}

//////////////////////////affichage salire///////////////////////

function salairAff() {
  var login = localStorage.getItem("tabLoginEmploye") || [];
  var employe = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === login) {
      var html = "";
      html +=
        "<tr><td>" +
        employe[i].salaire +
        "</td><td>" +
        employe[i].salaireF +
        "</td><td>" +
        employe[i].salaireConf +
        "</td></tr>";

      document.getElementById("employeSalaireAff").innerHTML += html;
    }
  }
}

///////////////////////////////accountt

function accountEmploye() {
  var account = localStorage.getItem("tabLoginEmploye");
  var employe = JSON.parse(localStorage.getItem("tabEmploye"));
  for (let i = 0; i < employe.length; i++) {
    if (employe[i].cin === account) {
      var html = "";
      html += "<tr><td>" + employe[i].nom + "</td><td>";
      html += employe[i].prenom + "</td>";
      html += "<td>" + employe[i].occupation + "</td><td>";
      html += "<td>" + employe[i].salaire + "</td><td>";
      html += "<td>" + employe[i].cin + "</td><td>";
      html += employe[i].password + "</td></tr>";

      document.getElementById("accountEmploye").innerHTML += html;
    }
  }
}

////////////////////////affmessage///////////

function affMesg() {
  var tab2 = localStorage.getItem("sendAllEmploye") || [];
  for (let i =0;i < tab2.length; i--) {
    html6 = "";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "title :" + tab2[i].title;
    html6 += "</div></div>";
    html6 += "<div class='row'>";
    html6 += "<div class='col-4'>";
    html6 += "content :" + tab2[i].msg;
    html6 += "</div></div>";

    document.getElementById("msgaff").innerHTML += html6;
  }

  var tab = localStorage.getItem("sendEmploye") || [];
  for (let i=0;i < tab.length;i++) {
    html = "";
    html += "<div class='row'>";
    html += "<div class='col-4'>";
    html += "title :" + tab[i].title;
    html += "</div></div>";
    html += "<div class='row'>";
    html += "<div class='col-4'>";
    html += "content :" + tab[i].msg;
    html += "</div></div>";

    document.getElementById("affMsgSelect").innerHTML += html;
  }
}