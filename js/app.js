var theme = getCookie('ctheme')?getCookie('ctheme'):'light'
var body = document.body
if(theme =='dark'){
  body.classList.add('dark-mode')
}
else{
  body.classList.remove('dark-mode')
}
setCookie('ctheme', theme, '30')
var spinnerBox = document.createElement('span')
var spinner = document.createElement('span')

spinner.classList.add('spinner')
spinnerBox.classList.add('spinner-box')
spinnerBox.appendChild(spinner)
var theme

function darkModeToggle() {
  body.classList.toggle('dark-mode')
  theme = body.classList.contains('dark-mode')?'dark':'light'
  setCookie('ctheme',theme,'30')
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key, value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}


var sidebar = document.getElementById('sidebar')
var overlay = document.getElementById('overlay')
overlay.addEventListener('click', sidebarToggle)
function sidebarToggle(){
  if(sidebar.style.left == '0px'){
    sidebar.style.left = '-100%'
    overlay.classList.remove('overlay')
    body.style.overflow = 'initial'
  }else{
    sidebar.style.left = '0px'
    overlay.classList.add('overlay')
    body.style.overflow = 'hidden'
  }
}