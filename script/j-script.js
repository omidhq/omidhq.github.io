$(document).ready(function(){
    $("a[href='" + window.location.href + "']").addClass("current");

    setTimeout(function(){
		$('.loader-section').addClass('move-right');
	}, 1300);

    setTimeout(function(){
		$('.dot-load').addClass('change-bg');
	}, 1900);

	setTimeout(function(){
		$('.dot-loader').addClass('loaded');
	}, 2000);

	setTimeout(function(){
		$('.pre-loader').addClass('loaded');
	}, 2300);

});