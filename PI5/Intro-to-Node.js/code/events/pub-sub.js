const events = require('events')

let ee = new events.EventEmitter();


// Event Bus 
ee.on('Publish', (message) => { 
  console.log(`[publisher] send msg: ${message}`)
  // Broadcast 
  ee.emit('BroadCast', message);
})

// Subscriber 
ee.on('BroadCast', (message) => { 
  console.log(`[subscriber] received a message ${message}`)
})

// Publisher 
ee.emit('Publish', 'Hello everyone !')