// input
var user=require('readline-sync')
var userName=user.question("What's your name? ")
console.log("Welcome to Money Heist Webseries Quiz "+userName)
var score=0
// processing
var highscores=[
  {
    name:"priya",
    score:6
  },
  {
    name:"kalyani",
    score:4
  },
  {
    name:"anandhi",
    score:5
  },
]

function users(ques,answer){
  var name=user.question(ques)
  if(name==answer){
    score=score+1
    console.log("you are right! ",+score)
    console.log("----------")
  }
  else{
    console.log("you are wrong! ",+score)
    console.log("--------------")
  }

}

    var q1={
    question:"Who planned the heist? ",
    answer:"Professor"
    }
  
  var q2={
    question:"Relation bewteen professor and Brelin? ",
    answer:"Brother"
  }
  
  var q3={
    question:"What was the Professor's real name? ",
    answer:"Sergio Marquina"
  }
  
  var q4={
    question:" How many people the Professor  carry out the plan to occupy the Royal Mint of Spain? ",
    answer:8
  }

  var q5={
  question:"How Much Currency Does The Gang Print At The Royal Mint? ",
  answer:"984 Million Euros"
  }
  var q6={
    question:" How does Nairobi die? ",
    answer:"Shot by Gandia"
  }

ques=[q1,q2,q3,q4,q5,q6]
for(i=0;i<ques.length;i++){
  newhighScores=ques[i]
  users(newhighScores.question,newhighScores.answer)
}
console.log("your score is: "+score)

function quiz(){
  if(score<3){
    console.log("you know very less about series ")
  }
  else{
    console.log("you know more about series ")
  }
}
quiz();


console.log("Check out high scores list below: ")
function scores()
{
highscores.map(score => console.log(score.name, " : ", score.score))
}
scores();
