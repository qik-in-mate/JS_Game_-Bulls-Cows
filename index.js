let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
let pcValue = shuffleArray(numbers).slice(0, 4).join('');

function bullsAndCows(userValue) {
  userValue = prompt('Please enter some four different numbers... \nExample: 1234' || null);
  let scoreBulls, 
      scoreCows;
  while (scoreBulls !== 4) {
    scoreCows = 0;
    scoreBulls = 0;
    if (userValue === null) {
      alert('Sad... GoodBye!');
      return;
    }
    for (let i = 0; i < pcValue.length; i++) {
      if (userValue[i] === pcValue[i]) {
        scoreBulls++;
        scoreCows--;
      }
      if (pcValue.includes(userValue[i])) {
        scoreCows++;
      }
    }
    if (scoreBulls === 4) {
      alert(`You win!\nYou have ${scoreBulls} Bulls!!!`);
      return;
    }
    if (userValue.length !== 4) {
      alert('Enter four!! numbers to start the game...');
    }
    for (let i = 0; i < userValue.length; i++) {
      let sortedUserData = userValue.split('').sort().join('');
      if (sortedUserData[i] === sortedUserData[i + 1]) {
        alert('You entered repeated digits.\nPlease enter different!! numbers to start the game...');
        userValue = prompt('Please enter some four different numbers... \nExample: 1234' || null);
      }
    }
    alert(`Your value: ${userValue}\nYour result => ${scoreBulls} Bulls and ${scoreCows} Cows.\n`);
    userValue = prompt('Please enter some four different numbers... \nExample: 1234' || null);
  }
}

document.querySelector('.start-button').addEventListener('click', bullsAndCows);
