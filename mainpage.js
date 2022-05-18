let stars = document.getElementById('stars') ;
let moon = document.getElementById('moon') ;
let mountans1 = document.getElementById('mountans1') ;
let mountans2 = document.getElementById('mountans2') ;
let revier = document.getElementById('revier') ;
let boat = document.getElementById('boat') ;
let name = document.querySelector('.Namy') ;
window.onscroll = function(){
  let value = scrollY ;
  stars.style.left = value +'px';
  moon.style.top = value*2 +'px';
  mountans1.style.top = value +'px';
  mountans2.style.top = value*0.5 +'px';
  revier.style.top = value +'px';
  boat.style.top = value +'px';
  boat.style.left = value*2 +'px';
  name.style.fontSize = value*0.25 +'px';
  if (scrollY>=67){
    name.style.fontSize = 67 +'px';
    name.style.position = 'fixed';
    if (scrollY>=317){
      name.style.display = 'none';
    }else {
      name.style.display = 'block';
    }
    if (scrollY >=267){
      document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else {
      document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
}
// starting register form validation password
let form = document.getElementById("form");
let password = document.getElementById("password");
let passworddiv = document.getElementById("passworddiv");
let error = document.createElement("span");
//************************************** */
let phone = document.getElementById("phone");
let pherror = document.createElement("span");
let phonediv =document.getElementById("phonediv");
pherror.setAttribute("id" , "pherrorspan");
pherror.textContent = "mobile number must be only 11 digits not enclude any characters";
//****************************************

error.setAttribute("id" , "errorspan");
error.textContent = "The password must start with uppercase character,include 8 characters,atleast one digit,one special character"
form.addEventListener("submit" ,function(action){
    let submit = 0;
    let validP = true;
    password = password.value.split("");
    let numbers =0 ,  special = 0 ,whitespace =0;
    for (let i = 0; i<password.length ; i++){
        if (password[i]==" ")
        whitespace++;
       else if (isNaN(password[i]) == true){
            if (password[i] == "-" || password[i] =="_" || password[i]=="#" || password[i]=="&" || password[i]=="*" || password[i] == "@")
            special++;
        }
        else if (isNaN(password[i]) ==false){
            numbers++;
        }


    }
    let cap =0
    if (password[0]!=password[0].toUpperCase()){
        cap++;
    }
    // ***************************************************************
    let phonevalid = true;
    for (let i =0 ; i< phone.value.length;i++){
        if (isNaN(phone.value[i])==true)
        phonevalid =false;
    }
    //******************************************************************* */
    if ((cap!=0 ) || (numbers == 0) ||( document.getElementById("password").value.length!=8) || (whitespace !=0) || (special >1 ||special <1 )  ){
        validP = false;
    }
    if (phonevalid == false || phone.value.length !=11){
        action.preventDefault();
        phonediv.appendChild(pherror);
        phone.onfocus = function (){
            document.getElementById("pherrorspan").remove();
            phone.value == " ";
        }

    }
    if (validP ==false){
        action.preventDefault();
         passworddiv.appendChild(error);
         document.getElementById("password").onfocus = function (){
             document.getElementById("errorspan").remove();
             document.getElementById("password").value="";

        }

    }


})
