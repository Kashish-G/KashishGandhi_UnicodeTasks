

function openPopup()
{
  let popup=document.getElementById("popup");
    popup.classList.add("open-popup");
    

const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
  btn.style.display = 'block';
  const box = document.getElementById('popup');
  box.style.display = 'block';
  document.getElementById('contactform').reset();
})};


function closePopup()
{
    popup.classList.remove("open-popup");
}


function pic_change()
{
  document.getElementById('submitpic').src="images/tickmsg.png";
  document.getElementById('extramsg').reset();
  
}
const form = document.getElementById('submit');
form.addEventListener('click', e => {
  e.preventDefault();
  validateName();
});

function validateName()
{
  var name=document.getElementById('fname').value;
  var name_error=document.getElementById('name-error');
  if(name.length==0)
  {
    name_error.innerHTML='*Your name is required';
    return validateEmail();
  }
  else if(!name.match(/^[A-Za-z ]*$/)){
    name_error.innerHTML='*Your name must contain alphabets only';
    return validateEmail();
  }
  return validateEmail();
}

function validateEmail()
{
  var email=document.getElementById('email').value;
  var email_error=document.getElementById('email-error');
  if(email.length==0)
  {
    email_error.innerHTML='*Your email id is required';
    return validateNumber();
  }
  else if(email.indexOf('@')<=0)
  {
    email_error.innerHTML='*Invalid position of @';
    return validateNumber();
  }
  else if(email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.'){
    email_error.innerHTML='*Invalid position of .';
    return validateNumber();
  }
  return validateNumber();
}

function validateNumber()
{
  var number=document.getElementById('mobile').value;
  var number_error=document.getElementById('mobile-error');
  if(number.length==0)
  {
    number_error.innerHTML='*Your contact number is required';
    return validateMessage();
  }
  else if(isNaN(number)){
    number_error.innerHTML='*Your contact number must contain numbers only';
    return validateMessage();
  }
  else if(number.length<10){
    number_error.innerHTML='*Your contact number must contain 10 digits';
    return validateMessage();
  }
  return validateMessage();
}

function validateMessage()
{
  var message=document.getElementById('msg').value;
  var msg_error=document.getElementById('msg-error');
  if(message.length==0)
  {
    msg_error.innerHTML='*Your message is required';
    return false;
  }
  else if(message.length>100)
  {
    msg_error.innerHTML='*Your message can only contain 100 characters';
    return false;
  }
   return openPopup();
}
















