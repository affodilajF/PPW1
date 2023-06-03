function takeAction(){
  window.alert("YEEEEEY");
}


function tampil() {
  var nama = document.getElementById("name").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value
  document.getElementById("thanks").innerHTML="<b>Thank for your response. Your data recorded as :</b>"
  document.getElementById("myname").innerHTML="Hello, my name is " + "<b>" + nama + "</b>"
  document.getElementById("contactme").innerHTML="Please contact me through : " + "<b>" + email + "</b>"
  document.getElementById("saysomething").innerHTML="I want to say about : " + "<br>" + "<b>" + message + "</b>"
}


var listIDitem = ["input1", "input2", "input3"]
var counter = 3;
var kg = [];

function calculate365(){
  var totalSampah = 0;

  for (var i = 0; i < counter; i++) {
    totalSampah = totalSampah + parseInt(document.getElementById(listIDitem[i]).value);
  }
  
  var hasil = (totalSampah)*365;
  document.getElementById("hasil").innerHTML="Jumlah sampah plastik per tahunnya " + "<b>" + hasil + "</b>"  
}


// dipake untuk get nama item yang nantinya jadi label 
function tambahInputFielduntukItemAPA() {
  
  var inputBaru = document.createElement("input");
  inputBaru.type = "text";
  inputBaru.id = "inputAPA"; // Memberikan id unik pada setiap input field

  var buttonBaru = document.createElement("button");
  buttonBaru.type = "text"; 
  buttonBaru.id = "buttonSAVE"; 
  buttonBaru.textContent = "SAVE";
  buttonBaru.addEventListener("click", function(event){
    inputFieldCustomItem();
    inputBaru.value = "";
 });

  var container = document.getElementById("detailInputItemApa");
  container.appendChild(inputBaru);
  container.appendChild(buttonBaru); 
  // buttonBaru adalah button untuk SAVE nilai inputan
}

// dipake untuk membangkitkan input field custom 
function inputFieldCustomItem(){
  counter++;

  var containerA = document.createElement("container"); 
  containerA.style.display = "flex";
  containerA.style.justifyContent = "space-between";
  containerA.style.alignItems = "center";
  containerA.style.marginBottom = "15px";

  var t = document.createTextNode(document.getElementById("inputAPA").value);

  var customInputField = document.createElement("input");
  customInputField.type = "text";
  customInputField.id = "input" + counter;
  customInputField.size = 18;
  listIDitem.push(customInputField.id);
  

  var container = document.getElementById("detailInputCalculator"); 
  containerA.appendChild(t);
  containerA.appendChild(customInputField); 
  container.appendChild(containerA);
}









  // listIDitem.forEach(function(element) {
  //   // console.log(element);
  //   // document.write(element);
  //   var a = parseInt(document.getElementById(element).value);
  //   document.write(a);
  // });


// var counter = 0; // Variabel untuk menghitung jumlah input field yang dibuat
// var counterInputINTEGER = 3;

// // dipake untuk get nama item yang nantinya jadi label 
// function tambahInputFielduntukItemAPA() {
//   counter++; // Menambah jumlah input field
  
//   var inputBaru = document.createElement("input");
//   inputBaru.type = "text";
//   inputBaru.id = "inputAPA"; // Memberikan id unik pada setiap input field

//   var buttonBaru = document.createElement("button");
//   // buttonBaru.type = "text"; 
//   buttonBaru.id = "buttonSAVE"; 
  
//   var container = document.getElementById("detailInputItemApa");
//   container.appendChild(inputBaru);
//   container.appendChild(buttonBaru); 
//   // buttonBaru adalah button untuk SAVE nilai inputan
// }

// // save button untuk menggambil inputan yang digunakan sebaga label 
// function buttonSaveINPUTAPA(){
//   // nama label baru 
//   var namaItemBaru = document.getElementById("inputAPA").value
//   // manggil fungsi untuk nambah input field kg sampah pakai function
//   addInputInteger();

//   var container = document.getElementById("detailInputItemApa");
//   var childElement = document.getElementById("inputAPA");
//   var childElement2 = document.getElementById("buttonSAVE");
//   // container.removeChild(childElement); 
//   // container.removeChild(childElement2);
// }

// function addInputInteger(){
//   counterInputINTEGER++; 


// }








// var nilaiInput = [];
// function ambilNilaiInput() {
//   for (var i = 1; i <= counter; i++) {
//     var input = document.getElementById("input" + i);
//     nilaiInput.push(input.value);
//   }
//   console.log(nilaiInput);
//   // document.write(nilaiInput);
// }

// function calculate360(){
//   for()
// }

// function calculate360(){
//   var hasil360; 
//   for(var i=1; i <= counter; i++){

//   }
// }







