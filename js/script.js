$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

jQuery(document).ready(function($) {
	$(".clickeable-row").click(function() {
		window.location = $(this).data("href");
	});
});