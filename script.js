const switchToggle = document.querySelector('input[type="checkbox"]')
const toggle_icon = document.getElementById('toggle-icon')
const nav =  document.getElementById('nav')
switchToggle.addEventListener('change',switchMode)
const image1 = document.getElementById('image-1')
const image2 = document.getElementById('image-2')
const image3 = document.getElementById('image-3')

function switchMode(e){
  if(e.target.checked){
    // เปลื่ยนสี element ทุก element
    document.documentElement.setAttribute('data-theme','dark')
    darkMode();
    switchImage('dark');
  }else{
    document.documentElement.setAttribute('data-theme',':root')
    lightMode();
    switchImage('light');
  }
}

function switchImage(mode){
    image1.src = `img/undraw_online_stats_0g94_${mode}.svg`
    image2.src = `img/undraw_design_data_re_0s26_${mode}.svg`
    image3.src = `img/undraw_coffee_re_x35h_${mode}.svg`
  
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