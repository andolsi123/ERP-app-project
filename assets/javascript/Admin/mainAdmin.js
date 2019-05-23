//////////////login admin///////////////

localStorage.setItem("adminAccount", JSON.stringify(["admin", "admin"]));

function actionLoginAdmin() {
  let adminLogin = JSON.parse(localStorage.getItem("adminAccount"));
  if (
    document.getElementById("exampleInputEmail1").value &&
    document.getElementById("exampleInputPassword1").value
  ) {
    if (
      document.getElementById("exampleInputEmail1").value === adminLogin[0] &&
      document.getElementById("exampleInputPassword1").value === adminLogin[1]
    ) {
      window.location.href = "main.html";
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
  let loginAdmin = JSON.parse(localStorage.getItem("adminAccount"));
  loginAdmin[0] = document.getElementById("chandeLogin").value;
  loginAdmin[1] = document.getElementById("changePass").value;
  localStorage.setItem("adminAccount", JSON.stringify(loginAdmin));
  window.location.href = "main.html";
}

////////////////////////adding RH ////////////////////////

function actionAddRh() {
  let tabRh = JSON.parse(localStorage.getItem("tabRh")) || [];

  if (localStorage.getItem("editRh")) {
    for (let i = 0; i < tabRh.length; i++) {
      if (tabRh[i].id === localStorage.getItem("editRh")) {
        let object = {
          name: document.getElementById("nomEmploye").value,
          prenom: document.getElementById("prenomEmploye").value,
          occupation: "Human Ressources",
          salaire: "1500",
          password: document.getElementById("exampleInputPasswordd").value,
          id: document.getElementById("cinEmploye").value
        };
        tabRh[i] = object;
        localStorage.removeItem("editRh");
      }
    }
    localStorage.setItem("tabRh", JSON.stringify(tabRh));
    window.location = "GererRh.html";
  } else {
    if (
      document.getElementById("nomEmploye").value &&
      document.getElementById("prenomEmploye").value &&
      document.getElementById("exampleInputPasswordd").value &&
      document.getElementById("cinEmploye").value
    ) {
      let object = {
        name: document.getElementById("nomEmploye").value,
        prenom: document.getElementById("prenomEmploye").value,
        occupation: "Human Ressources",
        salaire: "1500",
        password: document.getElementById("exampleInputPasswordd").value,
        id: document.getElementById("cinEmploye").value
      };
      tabRh.push(object);
      localStorage.setItem("tabRh", JSON.stringify(tabRh));
    }
    window.location.href = "GererRh.html";
  }
}

////////////////// affichage RH///////////////

function affRh() {
  let tabRh = JSON.parse(localStorage.getItem("tabRh")) || [];

  for (let i = 0; i < tabRh.length; i++) {
    let html = "";
    html += "<tr><td>";
    html += tabRh[i].name + "</td>";
    html += "<td>" + tabRh[i].prenom + "</td>";
    html += "<td>" + tabRh[i].id + "</td>";
    html += "<td>" + tabRh[i].password + "</td>";
    html +=
      "<td> " +
      "<button class='btn border rounded mr-2' type='button' onclick='modRh(" +
      tabRh[i].id +
      ")'>modifier</button>" +
      "<button class='btn pl-2 border rounded' type='button' onclick='supRh(" +
      tabRh[i].id +
      ")'>supprime</button></td></tr>";

    html += "</tr>";

    document.getElementById("RHAffichage").innerHTML += html;
  }
}

//////////////////////del and mod RH///////////////

function modRh(id) {
  let tabRh = JSON.parse(localStorage.getItem("tabRh"));
  for (let i = 0; i < tabRh.length; i++) {
    if (tabRh[i].id == id) {
      localStorage.setItem("editRh", tabRh[i].id);
      window.location.href = "createRH.html";
      break;
    }
  }
}

function rempRh() {
  if (localStorage.getItem("editRh")) {
    let tabRh = JSON.parse(localStorage.getItem("tabRh"));
    let edit = localStorage.getItem("editRh");
    for (let i = 0; i < tabRh.length; i++) {
      if (tabRh[i].id == edit) {
        document.getElementById("nomEmploye").value = tabRh[i].name;
        document.getElementById("prenomEmploye").value = tabRh[i].prenom;
        document.getElementById("cinEmploye").value = tabRh[i].id;
        document.getElementById("exampleInputPasswordd").value =
          tabRh[i].password;
      }
    }
  }
}

function supRh(id) {
  let tabRh = JSON.parse(localStorage.getItem("tabRh"));

  for (let i = 0; i < tabRh.length; i++) {
    if (tabRh[i].id == id) {
      tabRh.splice(i, 1);
      localStorage.setItem("tabRh", JSON.stringify(tabRh));
    }
  }
  window.location.href = "GererRh.html";
}

//////////////////////////////afff employeee

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
    html += employeList[i].occupation + "</td><td></tr>";

    document.getElementById("affemA").innerHTML += html;
  }
}

//////////////////////message///

function sendMessage() {
  let message = document.getElementById("exampleFormControlTextarea1").value;
  if (document.getElementById("exampleRadios2").checked) {
    let object2 = {
      title: document.getElementById("titleM").value,
      msg: message,
      id: Date.now()
    };
    let tab2 = JSON.parse(ocalStorage.getItem("messageAdminToRh")) || [];
    tab2.push(object2);
    localStorage.setItem("messageAdminToRh", JSON.stringify(tab2));
  }
  if (document.getElementById("exampleRadios1").checked) {
    let object3 = {
      msg: message,
      title: document.getElementById("titleM").value,
      id: Date.now()
    };
    let tab3 = JSON.parse(localStorage.getItem("messageAdminToEmploye")) || [];
    tab3.push(object3);
    localStorage.setItem("messageAdminToEmploye", JSON.stringify(tab3));
  }
}
