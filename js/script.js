$(document).ready(function(){
/* quiz functionality */


$('.answer').click(function(){
	$('.answer').removeClass('selected');
	$(this).addClass( "selected" );
	$('.rightarrow').fadeIn( 500 ).show();
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});
/* not sure about this part... */
function answerChecker() {
var questionNumber = $('.selectedAnswer')[0].parentElement.id;
var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
	
	checkAnswer(questionNumber, questionAnswer);

};

function checkAnswer(question, answer){

	if (question == "n1" && answer == "Chile"){
		console.log("Answer 1 - right");

	}
	else if (question == "n1" && answer !== "Chile") {
		console.log("Answer 1 - wrong");
		
	}
	

};
/* not sure */



/* navigation buttons and arrows */
$('.myButton').click(function(){
		$('.results').hide();
		$('.numberCircleInverted').hide();
		$('.numberCircle').show();
        $('.start').fadeOut ( 'slow' ).hide();
        $('.n1').fadeIn( 500 ).show();
        $('.rightarrow').hide();
        $('#nc1').hide();
        $('#nci1').show();
 		$('#nci1').css('display', 'inline-block');
});

$('#a1').click(function(){
	$('.rightarrow').hide();
	$('.n1').hide();
	$('.n2').fadeIn( 500 ).show();
	$('#nc2').hide();
	$('#nci2').show();
 	$('#nci2').css('display', 'inline-block');
 	answerChecker();
});

$('#a2').click(function(){
	$('.rightarrow').hide();
	$('.n2').hide();
	$('.n3').fadeIn( 500 ).show();
	$('#nc3').hide();
	$('#nci3').show();
 	$('#nci3').css('display', 'inline-block');
});


$('#a3').click(function(){
	$('.rightarrow').hide();
	$('.n3').hide();
	$('.n4').fadeIn( 500 ).show();
	$('#nc4').hide();
	$('#nci4').show();
 	$('#nci4').css('display', 'inline-block');


});

$('#a4').click(function(){
$('.rightarrow').hide();
	$('.n4').hide();
	$('.n5').fadeIn( 500 ).show();
	$('#nc5').hide();
	$('#nci5').show();
 	$('#nci5').css('display', 'inline-block');
});


$('#a5').click(function(){
	$('.n5').hide();
	$('.results').fadeIn( 750 ).show();
});
/* end navigation */

});