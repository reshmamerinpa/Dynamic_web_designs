/*function setup()
{
  var textInput;
  textInput = document.getElementById('name');
  textInput.focus();

}
window.addEventListener('load', setup);*/
function checkname()
{
var n=document.getElementById('name');
if(n.value.length==0)
{
    document.getElementById('nam').innerHTML='Please fill the field';
}
else {
  document.getElementById('nam').innerHTML='';
}
}
/*------validate mail-------*/
function checkemail(){
  var c=document.getElementById('email');
  if((c.value.includes("@"))&&(c.value.includes("."))){
      document.getElementById('em').innerHTML='';
  }
  else {
      document.getElementById('em').innerHTML='Please enter a valid mail';
  }
}

function checkusername()
{
  var elmsg=document.getElementById('pwd');
  if(this.value.length<8)
  {
    elmsg.textContent='Please make sure your password has atleast 8 characters.';
  }
    else
   {
    elmsg.textContent='';
  }
}
var elusername=document.getElementById('pass');
elusername.addEventListener('blur',checkusername);
function bio()
  {
         var c=140;
         var x = document.getElementById("bio").value;
         len=x.length;
         c=c-len;
           document.getElementById("sbio").innerHTML = c;
  }

/*------password match--------------*/

function validate() {
    var pass1 = document.getElementById("pass").value
        var pass2 = document.getElementById("cpass").value
            if(pass != pass2) {
          var msg="password not matching";
          document.getElementById('cpwd').innerHTML=msg;
          }
      }
function age() {
    var msg = "You need parent permission to join.Tick here if you can join";
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
     var myage= ~~ ((Date.now() - Bday) / (31557600000));
     if(myage<18){
       var theBday = document.getElementById('birth');
       theBday.innerHTML = msg;
     }
  /*    Q4A += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000));*/

}
/*-------validation--------*/

  function validation(){
    var msg='please fill this field';
    var na=document.getElementById('name');
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');
    var cpass=document.getElementById('cpass');
    var bday=document.getElementById('bday');
    var bio=document.getElementById('bio');
        if(na.value.length==0)
      {
        var nam=document.getElementById('nam');
          nam.innerHTML=msg;

        }
        if(email.value.length==0)
        {
          var em=document.getElementById('em');
          em.innerHTML=msg;

          }
          if(pass.value.length==0)
          {
            var pwd=document.getElementById('pwd');
            pwd.innerHTML=msg;

          }
          if(cpass.value.length==0)
          {
            var cpwd=document.getElementById('cpwd');
            cpwd.innerHTML=msg;

          }
          if(bday.value.length==0)
          {
            var birth=document.getElementById('birth');
            birth.innerHTML=msg;

          }
            if(bio.value.length==0)
            {
              var sbio=document.getElementById('sbio');
              sbio.innerHTML=msg;

            }
          }
