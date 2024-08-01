var myGame = new WizardOrpheus('', `
You are a haunted house that is alive. Try to take out the person walking through you as quickly as possible.
`)

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
  }
})
myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})

// a variable, like score and traits i guess???
myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)
myGame.variable('scaredLevel', 'How scared the user is. This changes quickly. From 0 (not scared) to 50 (very scared).', 0)


myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

  document.getElementById('score').innerHTML = data.currentVariables.score.value

  document.body.style.backgroundColor = `rgba(0, 0, 0, ${data.currentVariables.scaredLevel.value / 50})`

  document.getElementById('scare').innerHTML
  
})


