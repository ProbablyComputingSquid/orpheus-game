/* Made using orpheus framework from hack club (thanks!)
   Produced for the joshco game jam https://itch.io/jam/joshco-game-jam
*/

// system prompt
var myGame = new WizardOrpheus('', `
The user is trying to complete their game for the Official JoshCo Game Jam. They've had about a month to complete their game, but they have been procrastinating, and have put it off until the very last day. You decide what happens as the user tries to complete their game in time. Keep everything realistic.   
`)

// initialize game variables
myGame.variable('completion', 'How complete the user\'s game for the game jam is. From 0 (not even started) to 100 (fully complete)', 0)

myGame.variable('timeLeft', 'How much time (in hours) the user has until the game jam is over. Decreases when user spends time doing things. From 24 (just started) to 0 (submission time)')

// my code is self-documenting
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value;
    myGame.message(userInput);

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('input').value = '';
    document.getElementById('typing').style = "diplay: block;"
  }
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  document.getElementById('typing').style = "diplay: none;"
  
  document.getElementById('completion').innerHTML = data.currentVariables.completion.value
  document.getElementById('timeLeft').innerHTML = data.currentVariables.timeLeft.value

  // [TODO] - implement this

  //document.body.style.backgroundColor = `rgba(0, 0, 0, ${data.currentVariables.tiredLevel.value / 100})`

  //document.getElementById('tiredLevel').innerHTML = data.currentVariables.tiredLevel.value
})



// [TODO] implement these later

/*

myGame.variable('hungryLevel', 'How hungry the user is. From 0 (not hungry) to 100 (starving).', 0)
myGame.variable('tiredLevel', 'How tired the user is. Increased by doing tedious tasks and working. From 0 (just woke up) to 100 (About to pass out)')

*/


