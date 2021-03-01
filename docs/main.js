var selectWard;
var selectSchoolNorth;
var selectSchoolCentral;
var selectSchoolEast;
var selectSchoolSouth;
var selectSchoolOther;
var confirmButton;
var schoolNum = 0;
const guideURL = "/test-repo/";
const guideList = ["ar.html", "", "", "", "", ""];

window.onload = function(){
  selectWard = document.getElementById("select-ward");
  selectSchoolNorth = document.getElementById("select-school-north");
  selectSchoolCentral = document.getElementById("select-school-central");
  selectSchoolEast = document.getElementById("select-school-east");
  selectSchoolSouth = document.getElementById("select-school-south");
  selectSchoolOther = document.getElementById("select-school-other");
  confirmButton = document.getElementById("confirm");
}

function sectionChange(selectbox) {
  if(selectbox.value == "okayama"){
    selectWard.classList.remove("hide");
    selectSchoolOther.classList.add("hide");
    selectWard.options[0].selected = true;
  }else if(selectbox.value == "other"){
    selectWard.classList.add("hide");
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.add("hide");
    selectSchoolOther.classList.remove("hide");
    selectSchoolOther.options[0].selected = true;
  }else{
    selectWard.classList.add("hide");
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.add("hide");
    selectSchoolOther.classList.add("hide");
  }
  confirmButton.classList.add("hide");
}

function wardChange(selectbox) {
  if(selectbox.value == "north"){
    selectSchoolNorth.classList.remove("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.add("hide");
    selectSchoolNorth.options[0].selected = true;
  }else if(selectbox.value == "central"){
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.remove("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.add("hide");
    selectSchoolCentral.options[0].selected = true;
  }else if(selectbox.value == "east"){
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.remove("hide");
    selectSchoolSouth.classList.add("hide");
    selectSchoolEast.options[0].selected = true;
  }else if(selectbox.value == "south"){
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.remove("hide");
    selectSchoolSouth.options[0].selected = true;
  }else{
    selectSchoolNorth.classList.add("hide");
    selectSchoolCentral.classList.add("hide");
    selectSchoolEast.classList.add("hide");
    selectSchoolSouth.classList.add("hide");
  }
  confirmButton.classList.add("hide");
}

function schoolChange(selectbox) {
  var val = Number(selectbox.options[selectbox.selectedIndex].value);
  if(val >= 1){
    schoolNum = val - 1;
    confirmButton.classList.remove("hide");
  }else{
    confirmButton.classList.add("hide");
  }
}

function confirm() {
  window.location.href = guideURL + guideList[schoolNum];
}

window.onbeforeunload = function() {
  selectWard.classList.add("hide");
  selectSchoolNorth.classList.add("hide");
  selectSchoolCentral.classList.add("hide");
  selectSchoolEast.classList.add("hide");
  selectSchoolSouth.classList.add("hide");
  selectSchoolOther.classList.add("hide");
  confirmButton.classList.add("hide");
  document.getElementById("select-section").options[0].selected = true;
  selectWard.options[0].selected = true;
  selectSchoolNorth.options[0].selected = true;
  selectSchoolCentral.options[0].selected = true;
  selectSchoolEast.options[0].selected = true;
  selectSchoolSouth.options[0].selected = true;
  selectSchoolOther.options[0].selected = true;
}
