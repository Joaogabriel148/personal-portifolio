/* ----- NAVIGATION BAR FUNCTION ----- */
  function myMenuFunction() {
    var menuBnt = document.getElementById("myNavMenu");

    if (menuBnt.className === "nav-menu") {
       menuBnt.className += "responsive";
    }

    else {
        menuBnt.className = "nav-menu";

    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
   window.onscroll = function() {headerShadow()}; 

  function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow ="0 1px 6px rgba(0, 0, 0, 0.25)";
      navHeader.style.height ="70px";
      navHeader.style.lineHeight ="70px";
    } 
    
    else {
      navHeader.style.boxShadow ="none";
      navHeader.style.height ="90px";
      navHeader.style.lineHeight ="90px";
    }
  }


/* ----- TYPING EFFECT ----- */
  var typingeffect = new typed(".typedText", {
    strings: ["Web Developer", "Full-Stack Developer", "Software Engineer"],
    loop: true,
    typeofSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */