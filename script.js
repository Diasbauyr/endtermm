$(document).ready(function(){
  $('.linesub').on('click', function(){
    $('.main-header__subjects').animate({"height"  : 'toggle'}, 'slow' );
    $(".main-header__courses").css("display", "none");
    $(".main-header__future").css("display", "none");
    });

  $('.linecourse').on('click', function(){
    $('.main-header__courses').animate({"height"  : 'toggle'}, 'slow' );

    $(".main-header__subjects").css("display", "none");

    $(".main-header__future").css("display", "none");
  });

  $('.linefut').on('click', function(){
    $('.main-header__future').animate({"height"  : 'toggle'}, 'slow' );
    
    $(".main-header__subjects").css("display", "none");

    $(".main-header__courses").css("display", "none");
  });
});

$(function(){
	$('linesub').on('click', function(){
  	$(this).toggleClass('active');
  });
});

