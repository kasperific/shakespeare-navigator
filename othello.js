$(document).ready(function () {

    $("a").click(function () {
        $(this).siblings("span").toggle("drop", {
            direction: "up"
        }, 500);
    });

    $("button#quote").click(function () {
	    $("div").toggleClass("quotes");
	});

    $("button#summaryClose").click(function () {
	    $("p").toggle();
	    return false;
	});


	var stickyNav = function(){  
		var scrollTop = $(window).scrollTop();
		var stickyNavTop = $('nav').offset().top;    
		       
		if (scrollTop > stickyNavTop) {   
		    $('nav').addClass('sticky');  
		} else {  
		    $('nav').removeClass('sticky');
		}   
	};

	$(window).scroll(function() {  
	    stickyNav();  
	});  

});

  
