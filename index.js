var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+userName );
var ask= readlineSync.question("Do you know ANJALI TYAGI ? yes/no  ");
var score = 0;
if(ask === "yes"){
  console.log("Please read the below given rules \nYou have to answer all the questions no skipping allowed \nEvery correct answer will get one mark we won't be having negative marking ");
var play= readlineSync.question("can we play quiz now yes/no ")

// else{
//   console.log("OOPS!!! ok bye have a nice day");
// }
quesNumber = 1;
if(play === "yes"){
  function quiz(ques,options,correctAnswer){
console.log("\nQ " +quesNumber +ques);
  
  for(var i=0; i<options.length; i++){
     console.log(`${i + 1}. ${options[i]}`);
  }
   userAnswer = readlineSync.question("Please enter your choice ");
    if (userAnswer == correctAnswer) {
        
        score++;
        // console.log("Your score is " + score);
      }
    //  else{
    //    console.log("you are wrong");
    //  }
     

    quesNumber++;
 
  }
  
  quiz("WHAT IS MY FAVOURITE COLOUR",["black","blue","red","green"],3);
  quiz("WHAT IS MY FAVOURITE FOOD",["chilli potato","chowmein","veg roll","burger"],1);
  quiz("WHAT IS MY BIRTH YEAR",["1996","1999","2002","1998"],2);
  quiz("DO I LOVE MAKEUP",["yes","no"],1);
  quiz("WHAT IS MY SCHOOL NAME",["Fatima convent school","ingraham","Ryan international school","GD Goenka"],1);
console.log("your score " + score);
if(score >=3){
  console.log("Hey!! you really know me well");
}
else{
  console.log("OOPS!!Sorry you don't know me well \n Better luck next time ");

    }
}
else{
  console.log("bye");

}
}
else{
  console.log("ok bye");
}

    


