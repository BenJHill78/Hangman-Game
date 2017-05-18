<script type="text/javascript">
var guessesLeft = 10;
var wordList = ["boat", "plane", "car", "train"];
var userGuess, wordSize, letterGuess, wordUsed; 
var letterUsed=false;
var placeHolder = "";
      //Start the game function//
      function gameStart(){
      console.log (guessesLeft);
      wordUsed = wordList[Math.floor(Math.random() * wordList.length) ];
      //if the letter used is less than the word then continue//
      for (var i =0; i<wordUsed.length; i++){
        //create blanks for the word//
        placeHolder +="_";
      }
      document.querySelector("#blanks").innerHTML=placeHolder;
      if (wordUsed==wordList[0]) {
       document.querySelector("#hint").innerHTML="What will get you there dry with water everywhere?";
     }
     else if (wordUsed==wordList[1]) {
       document.querySelector("#hint").innerHTML="What will get you there high above the streets below?";
     }
     else if (wordUsed==wordList[2]) {
       document.querySelector("#hint").innerHTML="What will get you there while stearing from your chair?";
     }
     else if (wordUsed==wordList[3]) {
       document.querySelector("#hint").innerHTML="What will track your route while you ride?";
     }
   }
   function userPlay(){
    letterUsed = false;
    for (var i =0; i<wordUsed.length; i++){
     if(userGuess == wordUsed.substring(i, i + 1))
     {
      letterUsed = true;
      placeHolder = placeHolder.substring(0, i) + userGuess + placeHolder.substring(i + 1, placeHolder.length + 1);
      document.querySelector("#blanks").innerHTML=placeHolder;
      console.log(guessesLeft);
    }
  }
  if(letterUsed==false)
  {
    guessesLeft--;
    document.querySelector("#guesses").innerHTML=guessesLeft;
  }
  if(guessesLeft==0 || placeHolder==wordUsed){
    placeHolder ="";
    guessesLeft =10;
    document.querySelector("#guesses").innerHTML=guessesLeft;
    gameStart();
    document.onkeyup=function(event){
      userGuess=event.key;
      userPlay();
    }
  }
}
gameStart();
document.onkeyup=function(event){
  userGuess=event.key;
  userPlay();
}
</script>