// COUNTERDOWN

function newYear() {

	let targetDay = new Date("09/10/2023").getTime()
	const now = new Date().getTime()

	const distance = targetDay - now

	let second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	let remainingDay = Math.floor(distance / day)
	let remainingHour = Math.floor((distance % day) / hour)
	let remainingMinute = Math.floor((distance % hour) / minute)
	let remainingSecond = Math.floor((distance % minute) / second)

	document.getElementById("days").innerHTML = remainingDay;
	document.getElementById("hours").innerHTML = remainingHour;
	document.getElementById("minutes").innerHTML = remainingMinute;
	document.getElementById("seconds").innerHTML = remainingSecond;

}

setInterval(() => {
	newYear()
}, 1000)


// SSS ACORDİON 
var biCaretUp = document.querySelector(".bi-caret-up")
var biCaretDown = document.querySelector(".bi-caret-down")

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-acordion");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
	  this.children[1].style.display="none";
	  this.children[2].style.display="block"
    } else {
      panel.style.display = "block";
	  this.children[1].style.display="block";
	  this.children[2].style.display="none"
    }
  });
}



// SWİPER

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
	cardsEffect: {
		slidesOffsetBefore: 50, // This is 5px slide offset
		slidesPerView: 1, // second slide partial show (In this question it was probably 3.5)
		spaceBetween: 15,
		rotate: false,
		perSlideOffset: 25
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	}
});


// TOGGLE MENU

const mobileNav = document.getElementById("mobileNav")
const navIconContainer = document.getElementById("navIconContainer")

navIconContainer.addEventListener("click", ()=>{
	mobileNav.classList.toggle("active")
})