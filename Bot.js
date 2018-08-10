/* __main__ */

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const rnd = () => {
  return Math.floor(Math.random() * (7 - 0) + 0)
}

const SETTINGS = {}

rl.on('line', input => {
  let lines = input.split(' ')
  console.error(`Received: ${input.split(' ')}`)

  if (lines[0] === 'settings') {
    /* Settings get sent before the actual game begins, after initialization they won't get resent */
    switch (lines[1]) {
      case 'player_names':
        SETTINGS.players = lines[2].split(',')
        break
      case 'your_bot':
        SETTINGS.yourBot = { name: lines[2] }
        break
      case 'timebank':
        SETTINGS.timebank = lines[2]
        break
      case 'your_botid':
        SETTINGS.yourBot = { id: lines[2] }
        break
      case 'field_width':
        SETTINGS.field = { width: lines[2] }
        break
      case 'field_height':
        SETTINGS.field = { height: lines[2] }
        break
    }
  }

  if (lines[0] === 'action' && lines[1] === 'move') {
    let rndMove = rnd()
    console.error(rndMove)
    console.error(SETTINGS)
    console.log(`place_disc ${rndMove}`)
  }
})
