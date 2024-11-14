

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById
    ("progress");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop
    let calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100)/ calcHeight);
    if (pos > 100){
        scrollProgress.style.display = "grid";}
        else {
            scrollProgress.style.display = "none";

        }
        scrollProgress.addEventListener("click", () =>{
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
    };
    
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.nav');
   
   
   menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
   }
   window.onscroll = () =>{
   
     menu.classList.remove('fa-times');
     navbar.classList.remove('active');
   }

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;