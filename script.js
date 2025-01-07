

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

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    ;
    ;

    // JavaScript for the Terms and Conditions Popup
document.addEventListener("DOMContentLoaded", () => {
    const openPopup = document.getElementById("open-terms");
    const closePopup = document.getElementById("close-terms");
    const popupOverlay = document.getElementById("terms-popup");
  
    // Open popup
    openPopup.addEventListener("click", (e) => {
      e.preventDefault();
      popupOverlay.classList.add("active");
    });
  
    // Close popup
    closePopup.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
    });
  
    // Close when clicking outside the popup content
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });
  });
  