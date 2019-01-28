/////////////////deconnection

document.getElementById("btnDconnection").addEventListener("click",actionDconnect);

function actionDconnect(){
    localStorage.setItem("tabLoginRh","");
    window.location.href="../login.html";
}

////////////////////////////addding a new employe

document.getElementById('addEmploye').addEventListener("click",actionAdd);

function actionAdd(){
    var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
    for(let i=1;i<6;i++){
        if(document.getElementById('exampleFormControlSelect1').getElementsByTagName('option')[i].selected){
            var selectedOccupation =document.getElementById('exampleFormControlSelect1').getElementsByTagName('option')[i].value;
        }
    }
    var employeObject = {
         nom: document.getElementById('nomEmploye').value,
         prenom: document.getElementById('prenomEmploye').value,
         cin: document.getElementById('cinEmploye').value,
         occupation: selectedOccupation,
         password: document.getElementById("exampleInputPassword1").value
    }
    if(employeObject.nom && employeObject.prenom && employeObject.cin && employeObject.occupation){
    employeList.push(employeObject);
    localStorage.setItem("tabEmploye",JSON.stringify(employeList));
}
}

////////////////////////affichage des employe/////////////

var employeList = JSON.parse(localStorage.getItem("tabEmploye")) || [];
for(let i=0;i<employeList.length;i++){
    var html ="";
    html += "<tr><td>"+employeList[i].nom+"</td><td>"+employeList[i].prenom+"</td><td>"+employeList[i].cin+"</td><td>";
    html += employeList[i].occupation+"</td><td>";
    html += "<button class='btn'>modifier</button><button class='btn'>supprime</button></td></tr>"; 
    document.getElementById('employeId').innerHTML += html;
}

////////////////////edit and delet employe




////////////affffichage congee/////////////

var congeTab = JSON.parse(localStorage.getItem("tabCone")) || [];


///////////////////////afffichage reclamation ///////////

var recTab = JSON.parse(localStorage.getItem("tabRec")) || [];



//////////////////////////////affichage salaire//////////////


var saliareTab = JSON.parse(localStorage.getItem("tabSalire")) || [];

for(let i=0;i<employeList.length;i++){
    
    var html2 = "";
    html2 += "<tr><td>";
    html2 += employeList[i].nom+" "+employeList[i].prenom+"</td>"+"</tr>";
    html2 += "<td>" +employeList[i].salire+"</td>";



    document.getElementById("saliare").innerHTML += html2 ;
}

/////////////////////gestion des pesences//////


document.getElementById("absent").addEventListener("click",actionAbsent);
function actionAbsent(){
    
    var counter = counter || 0;
    var date = new Date();
    var absentDate = document.getElementById('').value;
    if(absentDate){
       
        if(parseInt(date.getDate())===1){
            counter = 0;
        }
        counter += 1;
        
        var n = JSON.parse(localStorage.getItem("absent"));
        n.push(absentDate);
        localStorage.setItem("absent",JSON.stringfy(n));
        
        }
}