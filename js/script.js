$(document).ready(function(){
/* quiz functionality */

$('.answer').click(function(){
	$('.answer').removeClass('selected');
	$(this).addClass( "selected" );
	$('.rightarrow').fadeIn( 500 ).show();
});





/* navigation buttons and arrows */
$('.myButton').click(function(){
        $('.start').fadeOut ( 'slow' ).hide();
        $('.n1').fadeIn( 500 ).show();
        $('#nc1').hide();
        $('#nci1').fadeIn ( 500 ).show();
 		$('#nci1').css('display', 'inline-block');
});

$('#a1').click(function(){
	$('.rightarrow').hide();
	$('.n1').hide();
	$('.n2').fadeIn( 500 ).show();
	$('#nc2').hide();
	$('#nci2').fadeIn ( 500 ).show();
 	$('#nci2').css('display', 'inline-block');
});

$('#a2').click(function(){
	$('.rightarrow').hide();
	$('.n2').hide();
	$('.n3').fadeIn( 500 ).show();
	$('#nc3').hide();
	$('#nci3').fadeIn ( 500 ).show();
 		$('#nci3').css('display', 'inline-block');
});


$('#a3').click(function(){
$('.rightarrow').hide();
	$('.n3').hide();
	$('.n4').fadeIn( 500 ).show();
	$('#nc4').hide();
	$('#nci4').fadeIn ( 500 ).show();
 		$('#nci4').css('display', 'inline-block');


});

$('#a4').click(function(){
$('.rightarrow').hide();
	$('.n4').hide();
	$('.n5').fadeIn( 500 ).show();
	$('#nc5').hide();
	$('#nci5').fadeIn ( 500 ).show();
 		$('#nci5').css('display', 'inline-block');
});


$('#a5').click(function(){
	$('.n5').hide();
});
/* end navigation */

});