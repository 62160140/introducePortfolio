const switchToggle = document.querySelector('input[type="checkbox"]')
const toggle_icon = document.getElementById('toggle-icon')
const nav =  document.getElementById('nav')
switchToggle.addEventListener('change',switchMode)


function switchMode(e){
  if(e.target.checked){
    // เปลื่ยนสี element ทุก element
    document.documentElement.setAttribute('data-theme','dark')
    darkMode();
  }else{
    document.documentElement.setAttribute('data-theme',':root')
    lightMode();
  }
}

function darkMode(){
  console.log('Dark Mode');
  // หาลูกตัวแรก
  toggle_icon.children[0].innerHTML="โหมดกลางคืน"
  // หาลูกคนที่2
  toggle_icon.children[1].classList.remove('fa','fa-sun-o')
  toggle_icon.children[1].classList.add('fa-solid','fa-moon')
  // เปลื่ยนเป็นสีดำ
  nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
}

function lightMode(){
  console.log('Light Mode');
  toggle_icon.children[0].textContent="โหมดกลางวัน"
  toggle_icon.children[1].classList.remove('fa-solid','fa-moon')
  toggle_icon.children[1].classList.add('fa','fa-sun-o')
  nav.style.backgroundColor = 'rgb(255 255 255 /50%)'

}