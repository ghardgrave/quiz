$(document).ready(function(){

$('.myButton').click(function(){
        $('.start').fadeOut ( 'slow' ).hide();
        $('.n1').fadeIn( 500 ).show();
        $('#nc1').hide();
        $('#nci1').fadeIn ( 500 ).show();
 		$('#nci1').css('display', 'inline-block');
});

$('#a1').click(function(){

	$('.n1').hide();
	$('.n2').fadeIn( 500 ).show();
	$('#nc2').hide();
	$('#nci2').fadeIn ( 500 ).show();
 		$('#nci2').css('display', 'inline-block');
});

$('#a2').click(function(){

	$('.n2').hide();
	$('.n3').fadeIn( 500 ).show();
	$('#nc3').hide();
	$('#nci3').fadeIn ( 500 ).show();
 		$('#nci3').css('display', 'inline-block');
});


$('#a3').click(function(){

	$('.n3').hide();
	$('.n4').fadeIn( 500 ).show();
	$('#nc4').hide();
	$('#nci4').fadeIn ( 500 ).show();
 		$('#nci4').css('display', 'inline-block');


});

$('#a4').click(function(){

	$('.n4').hide();
	$('.n5').fadeIn( 500 ).show();
	$('#nc5').hide();
	$('#nci5').fadeIn ( 500 ).show();
 		$('#nci5').css('display', 'inline-block');
});


$('#a5').click(function(){
	$('.n5').hide();
	


});

});