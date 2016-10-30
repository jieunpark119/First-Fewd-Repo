// 1. set up variables for userChoice, computerChoice, userScore, computerScore, result to their appropriate values. 
//Eg. userScore would be 0, determine the rest
var userChoice;
var computerChoice;
var userScore = 0;
var computerScore = 0;


// 2. Fix missing pieces(REPLACE ME) in this function that gets a random computer choice
function getComputerChoice() {

  // create an array that has the 3 choices (rock, paper and scissors)
  var plays = ["rock","paper","scissors"];

  // the following grabs a random number between 0 and the length of the array, 
  //how do we get the total number of items in an array?
  var randNum = Math.floor(Math.random() * plays.length);
  console.log(randNum);
  // using randNum as the index we need in our array, 
  // how do we grab the corresponding item in our array?
  var play = plays[randNum];
  console.log(play);


  // we need to return the random choice stored in play, how do we do that?
  return play;
}


// 3. on clicking a choice
$("button").on("click",function(){
  // - update userChoice with the selected choice
  userChoice = $(this).attr("id");
  console.log(userChoice);
  // - get a random computerChoice using the function we created above
  computerChoice = getComputerChoice();
  // - and call a function that figures out the winner
  getWinner();


});
 


// 4. create a function called getWinner to
function getWinner(){
  // - compare user and computer choice to determine the winner
  if(userChoice==="rock" || computerChoice==="scissors"){
    // - update(increment) either the computer or user score
    
    userScore++;

    $("#status").text("You chose" + " " + userChoice + " " + "Computer chose" +" "+ computerChoice+".You WON");
    $("#humanScore").text(userScore);
    

  }else if (userChoice==="rock" || computerChoice==="rock") {
    userScore++;
    computerScore++;
    $("#status").text("You chose" +" " + userChoice + " " + "Computer chose" +" "+ computerChoice+".You TIED");

  }

  else{
  
    computerScore++;
    $("#status").text("You chose" +" " +userChoice + " " + "Computer chose" +" "+ computerChoice+".You lost");
    $("#computerScore").text(computerScore);
    
  };
  // tip: you will need if statements and conditions

  //--- a. compare user against computer to determine the winner

  //--- b. update(increment) the scores for the user and computer

  //--- c.display the result in "status" using the following sentence format (replace the words in uppercase with the appropriate value):
  // "You chose USER CHOICE. Computer chose COMPUTER CHOICE. You WON/LOST/TIED.

  // - display the result
  



}

$("#reset").on("click",function(){
  $("#computerScore").text(0);
   $("#humanScore").text(0);


});




// 5. on clicking "start over", reset the scores to zero
