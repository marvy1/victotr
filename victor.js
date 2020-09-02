// const toggleButton = document.getElementByClassName('toggle-button'){0}
// const sectionOneNavbar = document.getElementByClassName('section-one-navbar'){0}

// toggleButton.addEventListener('click', () => {
//    sectionOneNavbar.classList.toggle('active')
// })
var x = true;
function a(){
	if(x){
		document.getElementsByClassName("section-one-navbar")[0].style.display = "block";
		x = false;
	}
	else{
		document.getElementsByClassName("section-one-navbar")[0].style.display = "none";
		x = true;
	}
}