function addNewWEField(){
    // console.log("Adding new Field");

   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-3");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder","Enter Here")
   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here")
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
 
     aqOb.insertBefore(newNode,aqAddButtonOb);
 
}

// generating cv
function generateCV(){
    // console.log("generating cv");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    //direct


    document.getElementById("nameT2").innerHTML = nameField;


    //contact

    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //links

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;


    document.getElementById("linkedT").innerHTML= document.getElementById("linkedField").value;

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   ///wes

   document.getElementById("weT").innerHTML=document.getElementById("weField").value;
   ///aqs
   document.getElementById("aqT").innerHTML=document.getElementById("aqField").value;

    document.getElementById("CV-form").style.display="none";
    document.getElementById("CV-template").style.display="block";


}
//print cv
function printCV(){
    window.print();
}