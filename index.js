const toggleMenu = document.getElementById('toggle-button');
const toggleMenuIcon = toggleMenu.querySelector('img'); 
const menu = document.getElementById("menu"); 
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelectorAll('.portfolio-link');
const modals = document.querySelector(".modal");
console.log(modals)
const html = document.querySelector('html');
const toogle = document.getElementById('toogle-theme');
const img = toogle.querySelector('img');

toggleMenu.addEventListener('click' , ()=>{
    menu.classList.toggle('translate-x-[-200%]');
    changeMenuIcon()
})
// close nav-link when click Menu list
navLinks.forEach(navLink =>{
    navLink.addEventListener('click' , ()=>{
        menu.classList.add('translate-x-[-200%]');
        changeMenuIcon()
    })
})


//modal

btn.forEach(b =>{
    b.addEventListener('click',()=>{
        modals.classList.remove('invisible');
        modals.classList.add('visible');
    })
})

modals.addEventListener('click' , ()=>{
    modals.classList.remove('visible');
    modals.classList.add('invisible');
})
// change Icon

function changeMenuIcon(){
    const isContainTranslate = menu.classList.contains('translate-x-[-200%]')
    const icon = isContainTranslate ? 'icon-menu':'icon-close'
    toggleMenuIcon.src = `../images/icons/${icon}.svg`
}   

//change modla



//Toggle 
toogle.addEventListener('click' , ()=>{
    html.classList.toggle('dark')
    changeToogle()
})

//change toogle
function changeToogle(){
    const isContainerDark = html.classList.contains('dark')
    const icon = isContainerDark ? 'icon-light':'icon-dark'
    img.src = `../images/icons/${icon}.svg`
}