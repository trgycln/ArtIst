const acordion=document.querySelector(".acor-dion")
const headerA=document.getElementById("headerA")
const textA=document.getElementById("textA")

headerA.addEventListener("click", ()=>{
	textA.classList.toggle("hidden");
})