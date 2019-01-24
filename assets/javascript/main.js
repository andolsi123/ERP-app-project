var loginEmploye = JSON.parse(localStorage.getItem("employeLogin")) || [];

function checkEploye() {
  if (
    document.getElementById("employeId").value &&
    document.getElementById("employePassword").value
  ) {
    for (let i = 0; i < loginEmploye.length; i++) {
      if (
        loginEmploye[i].ID === document.getElementById("employeId").value &&
        loginEmploye[i].PASS ===
          document.getElementById("employePassword").value
      ) {
        break;
      }
    }
    window.location.href="";
  }
}

var loginUser = JSON.parse(localStorage.getItem("userLogin")) || [];

function checkUser() {
  if (
    document.getElementById("userId").value &&
    document.getElementById("userPassword").value
  ) {
    for (let i = 0; i < userEmploye.length; i++) {
      if (
        loginUser[i].ID === document.getElementById("userId").value &&
        loginUser[i].PASS ===
          document.getElementById("userPassword").value
      ) {
        break;
      }
    }
    window.location.href="";
  }
}