const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
	header.classList.toggle ("sticky", window.scrollY > 0);
});

function loadinganimation(){
	gsap.from(".home-text ",{
		y:100,
		opacity:0,
		delay:0.5,
		duration:0.9,
		stagger:0.3
	})
}
loadinganimation();

document.addEventListener("mousemove", function(e){
		gsap.to("#cursor", {
			left:e.x,
			top:e.y
		})
})


document.querySelector(".ele")
.forEach(function (ele) {
	ele.addEventListener("mousemove", function(e){
		gsap.to(ele.querySelector("img"),{
			opacity:1,
			ease: Power1
		})
	})
});
