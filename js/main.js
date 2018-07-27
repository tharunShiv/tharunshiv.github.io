// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// TypeWriter Sim
var captionLength = 0;
var caption = "YouTuber, Web Developer, Programmer, Machine & Deep Learning";

$(document).ready(function() {
  setInterval("cursorAnimation()", 600);
  setInterval(function() {
    $(".menu-btn").effect("shake", { times: 4 }, 1000);
  }, 5000);
  captionEl = $("#caption");
  type();
});

function testTypingEffect() {
  type();
}

function type() {
  captionEl.html(caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout("type()", 50);
  } else {
    captionLength = 0;
    caption = "";
  }
}

function testErasingEffect() {
  caption = captionEl.html();
  captionLength = caption.length;
  if (captionLength > 0) {
    erase();
  }
}

function erase() {
  captionEl.html(caption.substr(0, captionLength--));
  if (captionLength >= 0) {
    setTimeout("erase()", 50);
  } else {
    captionLength = 0;
    caption = "";
  }
}

function cursorAnimation() {
  $("#cursor")
    .animate(
      {
        opacity: 0
      },
      "fast",
      "swing"
    )
    .animate(
      {
        opacity: 1
      },
      "fast",
      "swing"
    );
}
