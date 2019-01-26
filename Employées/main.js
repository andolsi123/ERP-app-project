function Login() {
    var A =document.getElementById("exampleInputEmail1").value;
    var B =document.getElementById("exampleInputEmail1").value;
    var select1 = document.getElementById("exampleRadios1");
    var select2 = document.getElementById("exampleRadios2");
    var tabRH = JSON.parse(localStorage.getItem("tabRh"));
    var tabEmp = JSON.parse(localStorage.getItem("tabEmploye"));
        
    if (select1 == true) {
        for (let i = 0; i < tabRh.length; i++) {
if ((tabRh[i].CIN == A)&&(tabRh[i].password == B) ){
    window.location.href ="Home.html";
    break;
}            
        }
            
        }
        if (select2 == true) {
            for (let i = 0; i < tabEmp.length; i++) {
                if ((tabEmp[i].CIN == A)&&(tabEmp[i].password == B) ){
                    window.location.href ="Home.html";
                    break;
                }            
            
        }
        
    }

}