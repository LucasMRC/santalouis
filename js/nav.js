console.log("hola culiao")
function openNav(){
	document.getElementById("header").classList.remove("hidden-mobile")
	document.getElementById("open-nav").classList.add("hidden")
	document.getElementById("close-nav").classList.remove("hidden")
}
function closeNav(){
	document.getElementById("header").classList.add("hidden-mobile")
	document.getElementById("open-nav").classList.remove("hidden")
	document.getElementById("close-nav").classList.add("hidden")
}