$(document).ready(function(){
    $("a[href='" + window.location.href + "']").addClass("current");

    setTimeout(function(){
		$('.loader-section').addClass('move-right');
	}, 300);

    setTimeout(function(){
		$('.dot-load').addClass('change-bg');
	}, 900);

	setTimeout(function(){
		$('.dot-loader').addClass('loaded');
	}, 000);

	setTimeout(function(){
		$('.pre-loader').addClass('loaded');
	}, 300);

});