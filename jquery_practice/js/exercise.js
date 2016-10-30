/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.
/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 * We've started you off, replace the sec
 */

	function question1(){
		$('p').css('color', 'blue');
	}

	$('#button1').on('click', question1);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

	function question2(){
		$('h2').html('Matt');
	}

	$('#button1').on('click', question2);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 */

	function question3(){
		$('ol li.falseFact').html('True Fact');
	}
    $('#button1').on('click', question3);




//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.
/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
 /**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
 /**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 
 $("#button2").on("click",function(){
 	$("body").css("background-color","pink");
 	$("h2").css("color","green");
 	$('blockquotes').html("<span>no quote</span>");
 })





//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

 /**
 * Question 8:
 * Have the following code execute when button 3 is clicked change the source image of the element with class ".city" to "http://lorempixel.com/g/500/400/food"
 */

 $("#button3").on("click",function(){
 	$("header h1").text("jQuery Ninja");
 	$(".city").attr("src","http://lorempixel.com/g/500/400/food");
 	$("ol li:last-child").removeClass('.falseFact');
 	$("input").val("Ji");

 });



/**
 * Question 10:
 * When button 3 is clicked, remove the class "falseFact" from the last-child that has Fact Four. Hint: Look up the last-child pseudo-class.
 */

 /**
 * Question 11:
 * When button 3 is clicked, change the text of the input field at the bottom of the page to your name.
 */




