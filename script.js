

const togglemenu = () => {

    const btn = document.getElementById("menuToggle");
    const menu = document.getElementById("menu")
    const toggleShowMenu = () => {
        console.log("kliknieto")
    }
    btn.addEventListener("click", () => {
        menu.classList.toggle("showMenu");
        if (menu.classList.contains("showMenu")) {
            window.onscroll = () => { window.scroll(0, 0); };
            hamburger.src= "./images/icon-close.svg";
        }
        else {
            hamburger.src= "./images/icon-hamburger.svg";
            window.onscroll = "";
        }
    });
}


const showGreeting = () =>{
    const title = document.getElementById('Greeting')
    // title.textContent = "Good Morning";
    const hour = new Date().getHours();
    console.log(hour)
    let text=null;
    if(hour>=6){
        text="Good Morning.";
    }else if(hour>=12 && hour<18){
        text="Good Afternoon.";
    }
    else  if(hour>=18 && hour <6){
        text="Good Evening.";
    }
    title.textContent=text;
}   


window.addEventListener("DOMContentLoaded",()=>{
    togglemenu();
    showGreeting();
})