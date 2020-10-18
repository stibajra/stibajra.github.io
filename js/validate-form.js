function validateForm(){
    var alertMessage = "";
    var formLomba = document.forms["form-pendaftaran"]["lomba"].value;
    var formName = document.forms["form-pendaftaran"]["name"].value;
    var formDate = document.forms["form-pendaftaran"]["date"].value;
    if (formLomba == ""){
        alert(alertMessage = alertMessage + "Pilih lomba yang ingin diikuti");
    }
}