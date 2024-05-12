function barsClose(iconClose){
    const navLinks = document.querySelector(".navlinks");
    iconClose.classList.toggle("fa-times");

    navLinks.classList.toggle("showNav");
}   

const arrowDown = () =>{
    let adminLink = document.querySelector(".adminLinks");
    let adminSubLinks = document.querySelector(".adminSubLinks");

    adminLink.addEventListener("click", () => {
        adminSubLinks.classList.toggle("dropdownSubLinks");
    })

};

arrowDown();


// ====================================================================================
//  // Get the button:
//  let mybutton = document.getElementById("myBtn");

//  // When the user scrolls down 20px from the top of the document, show the button
//  window.onscroll = function() {scrollFunction()};

//  function scrollFunction() {
//      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//          myButton.style.display = "block";
//      }else {
//          mybutton.style.display = "none";
//      }
//  }

//  //When the user clicks on the button, scroll to the top of the document
//  function topFunction() {
//      // For Safari
//      document.body.scrollTop = 0; 
//      // For Chrome, Firefox, IE and Opera
//      document.documentElement.scrollTop = 0;
//  }