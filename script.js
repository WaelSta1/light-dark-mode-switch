const toggleSwitch = document.querySelector('input[type="checkbox"]');
const sun_moon = document.getElementById('toggle-icon')
const textBox = document.getElementById('text-box')
const navbar = document.getElementById('nav')
const  img1= document.getElementById('img1');
const  img2= document.getElementById('img2');
const  img3= document.getElementById('img3');

// Dark Mode Styles
const darkMode = ()=>{
    navbar.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)';
    sun_moon.children[0].innerHTML = 'Dark Mode';
    sun_moon.children[1].classList.replace('fa-sun','fa-moon')
    document.documentElement.setAttribute('data-theme','dark')
    img1.setAttribute('src','./img/undraw_proud_coder_dark.svg');
    img2.setAttribute('src','./img/undraw_feeling_proud_dark.svg')
    img3.setAttribute('src','./img/undraw_conceptual_idea_dark.svg')
}

// Light Mode Styles
const lightMode = ()=>{
    navbar.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    sun_moon.children[0].innerHTML = 'Light Mode';
    sun_moon.children[1].classList.replace('fa-moon','fa-sun')
    document.documentElement.setAttribute('data-theme','light')
    img1.setAttribute('src','./img/undraw_proud_coder_light.svg');
    img2.setAttribute('src','./img/undraw_feeling_proud_light.svg')
    img3.setAttribute('src','./img/undraw_conceptual_idea_light.svg')
}

//Switch Theme
const switchTheme = (e)=>{
    if(e.target.checked){
        darkMode()
    }
    else{
       lightMode()
    }
}

toggleSwitch.addEventListener('change',switchTheme)