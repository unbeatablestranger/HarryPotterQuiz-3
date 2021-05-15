class Quiz 
{
  constructor()
  {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  
 

  async start()
  {
    if(gameState === 0)
    {
      var contestant = new Contestant();
      contestantCountRef = await database.ref('contestantCount').once("value");

      if(contestantCountRef.exists())
      {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play()
  {
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text("The Results",350,50);

    text("-------",310,65);

    //call getContestantInfo() here
    Contestant.getContestantInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
    {
      debugger;
      
      for(var plr in allContestants)
      {
        debugger;

        var correctAns ="2";
        var displayAns = 230;

        //write code to highlight contest who answered correctly

        if(correctAns === allContestants[plr].answer)
        {
          fill("green");
        }else
        {
          fill("red");
          
        }
    
      displayAns+=30
      textSize(20);
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAns);

      }
    }

    
   


    //write code to add a note here
    
    
    
  }
}
