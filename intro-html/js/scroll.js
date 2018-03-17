$(document).ready(function(){
	$(".up").click(function(){
        scrollUp();
	});
	$(".down").click(function(){
		scrollDown();
	});
	$(".next").on('click', function(){
		nextPage();
	});
	$(".table-link").on('click', function(){
		$("main").css("transform", "translateX(-100vw)");
		var href = $(this).attr("title");
		window.setTimeout(function(){
			window.location.href = href;
		}, 500);
	});
	$(".prev").on('click', function(){
		prevPage();
	});
	$(document).keydown(function(e) {
    	switch(e.which) {

    		case 37:
    		prevPage();
    		break;

	        case 38:
	        scrollUp();
	        break;

	        case 39:
	        nextPage();
	        break;

	        case 40:
	        scrollDown();
	        break;

	        case 76:
	        lockScroll();
	        break;

	        default: return; // exit this handler for other keys
		}
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

});

function scrollUp() {
	var height = $(window).height();
	$('html, body').animate({
      scrollTop: '-='+height
    }, 1000);
}
function scrollDown() {
	var height = $(window).height();
	$('html, body').animate({
      scrollTop: '+='+height
    }, 1000);
}
function nextPage() {
	$("main").css("transform", "translateX(-100vw)");
	var href = $(".next").attr("title");
	window.setTimeout(function(){
		window.location.href = "../"+href;
	}, 500);
}
function prevPage() {
	$("main").css("transform", "translateX(100vw)");
	var href = $(".prev").attr("title");
	window.setTimeout(function(){
		window.location.href = "../"+href;
	}, 500);
}
function lockScroll() {
	$("body").toggleClass("overflow-auto");
	$(".lock-scroll").toggleClass("lock");
	$(".lock-scroll").toggleClass("unlock");
	setTimeout(function(){
	  $(".lock-scroll").toggleClass("animate-lock");
	}, 1500);
	$(".lock-scroll").toggleClass("animate-lock");
}