$(document).ready(function(){
/* questions object */
var questions = [
      {
      	question: "What country is Easter Island part of?",
        choices: ["Chile","Tahiti","Ecuador","Peru"],
        qNum: 0,
		answer: "Chile"      
	},
     	{
      	question: "What are the giant statues on Easter Island called?",
        choices: ["Maha","Moai","Toki","Pukao"],
        qNum: 1,
        answer: "Moai",
      },
      {
      	question: "Which way do most of the statues face?",
        choices: ["West","Toward each other","Toward the sea","Inland"],
        qNum: 2,
        answer: "Inland",
      },
      {
        question: "What is the other name for Easter Island?",
        choices: ["Ahu","Orango","Rapa Nui","Rapa Iti"],
        qNum: 3,
        answer: "Rapa Nui"
      },
      {
       question: "What is the name of the only town on Easter Island?",
       choices: ["Papeete","Tongariki","Anakena","Hanga Roa"],
       qNum: 4,
       answer: "Hanga Roa"
      },

];

/* global variables */
var numberCorrect = 0;
var currentQuestion = 0;

/* start-reset button */

$('.myButton').click(function(){
/*		currentQuestion = 0;*/
		nextQuestion();
		$('.results').hide();
		$('.numberCircleInverted').hide();
		$("#nci1").show();
		$('.numberCircle').show();
		$('#nc1').hide();

        $('.start').fadeOut ( 'slow' ).hide();
        $('#question-wrapper').fadeIn( 500 ).show();
        
   /*     $('#nc1').hide();
        $('#nci1').show();
 		$('#nci1').css('display', 'inline-block');*/
});




/* advances circled numbers, displays new question, */

function nextQuestion(){


		console.log('current question is '+currentQuestion);  

		$('.rightarrow').hide();

		numberAdvance();
		/* display new question */
	/*	$("#question-wrapper").html(newQuestion);*/
		var newQuestion = '<div class="q">'+questions[currentQuestion].question+'<br><br></div><div class="answer answer0">'+questions[currentQuestion].choices[0]+'</div><div class="answer answer1">'+questions[currentQuestion].choices[1]+'</div><div class="answer answer2">'+questions[currentQuestion].choices[2]+'</div><div class="answer answer3">'+questions[currentQuestion].choices[3]+'</div><div class="rightarrow"><img src="images/rtarrow.png" width=50px class="RA"></div>';

		$("#question-wrapper").html(newQuestion);

		$('.answer').click(function(){
			$('.answer').removeClass('selectedAnswer');
			$(this).addClass('selectedAnswer');
			$('.rightarrow').fadeIn( 500 ).show();
	/*		console.dir(this); */
		});

	$('.RA').click(function(){
		righton();
	});

	

}


function righton(){

	if (currentQuestion < 4) {
	score(); 
	currentQuestion++;  
	nextQuestion();
}

	else {

		$(".RA").click(function(){
			score();
				
    			$('.results').show; 
       			var finalScore = '<div class="results"><h2>RESULTS</h2> You got '+numberCorrect+' question(s) right! <a href="#" class="myButton">Try Again</a></div>'

    			$("#question-wrapper").html(finalScore);
			
			});

	}
}

function numberAdvance() {
		/* advancing circled numbers */
		var numcirc = questions[currentQuestion].qNum + 1;
		$("#nc" + numcirc).hide();
		$("#nci" + numcirc).show();
		$("#nci" + numcirc).css('display', 'inline-block');

}

function score(){ 
 
 /* answer of currentquestion*/
		var text = $('.selectedAnswer').text();

		if(text === questions[currentQuestion].answer){
       			alert("Yes! "+text+"is correct!");
       			numberCorrect++;
       			console.log("number correct is "+numberCorrect);
       			
        }       else{
        		alert("no, "+text+" is wrong");
        }
}

});