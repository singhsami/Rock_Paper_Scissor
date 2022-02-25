const choices = document.querySelectorAll(".choices")
const score=document.querySelector("#score")
const result=document.querySelector("#result")
const restart=document.querySelector('#restart')
const modal=document.querySelector('.modal')

const scoreboard={
    player:0,
    computer:0
}
function getComputedChoice(){
    const randomNumber = Math.random()
 if(randomNumber<0.33)
 return "rock";
 else if(randomNumber>0.66)
 return "paper";
 else
 return "scissors";
}

function getwinner(p,c){
  if(p===c){
    return'draw';}
    else if(p==='rock'){
if(c==='paper'){
  return 'computer';
}
else{
return 'player'
}
    }
    else if(p==='paper'){
      if(c==='scissors'){
      return 'computer';
    }else{
      return 'player';
    }
    }
    else if(p==='scissors'){
      if(c==='rock'){
        return'computer'
  
      }else{return 'player';}
      }
    }
  
function showWinner(winner,computerChoice){
if(winner==='player'){
  scoreboard.player++;
  result.innerHTML=`
  <h1 class='text-win'>You Win</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
  </p>`;

}
else if(winner  =='computer'){
  scoreboard.computer++;
  result.innerHTML=`
  <h1 class='text-lose'>You Lose</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
  </p>`;

}
else{
  result.innerHTML=`
  <h1 class='text-lose'>draw</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
  </p>`;
}

score.innerHTML= `
<p>Player: ${scoreboard.player}</p>
<p>computer: ${scoreboard.computer}</p>
`
modal.style.display='block'
}

function clearModal(e){
  if(e.target===modal){
    modal.style.display='none'
  }
}
function restartGame(){
  scoreboard.player=0;
  scoreboard.computer=0;
  score.innerHTML= 
  `
  <p>Player: ${scoreboard.player}</p>
  <p>computer: ${scoreboard.computer}</p>
  `
}

function play(e){
restart.style.display="inline-block"
const playerChoice=e.target.id
const computerChoice=getComputedChoice()
let winner=getwinner(playerChoice,computerChoice)
showWinner(winner,computerChoice)
}

choices.forEach(x=> x.addEventListener('click',play))
  window.addEventListener('click',clearModal)
  restart.addEventListener('click',restartGame)

