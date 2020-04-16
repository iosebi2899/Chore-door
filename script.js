var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
var startButton = document.getElementById('start')
var currentlyPlaying = true;
var isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else {
    return false;
  }
};
var isClicked = (door) =>{
  if(door.src === closedDoorPath){
    return false;
  } else{
    return true;
  }
};
var playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameover('win')
  }else if(isBot(door)){
    gameover('lose');
  }
};
var randomChoreDoorGenerator = () => {
 var choreDoor = Math.floor(Math.random()*numClosedDoors);
 if(choreDoor === 0){
   openDoor1 = botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor3 = spaceDoorPath;
 }else if(choreDoor === 1){
   openDoor2 = botDoorPath;
   openDoor1 = beachDoorPath;
   openDoor3 = spaceDoorPath;
 }else{
   openDoor3 = botDoorPath;
   openDoor2 = spaceDoorPath;
   openDoor1 = beachDoorPath;
 }
};
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);  
}

  };
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
}
} ;
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
}
} ;

  startButton.onclick = () => {
    if(!currentlyPlaying){
    startRound()
  }
};
var startRound = () =>{
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML='Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
var gameover = (status) =>{
  if(status === 'win'){
    startButton.innerHTML='You Win! Play again?';
  }else{
    startButton.innerHTML='Game over! Play again?'
  };
  currentlyPlaying = false;
};
startRound();

