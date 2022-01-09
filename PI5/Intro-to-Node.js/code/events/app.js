const events = require('events');

let myEvent = new events.EventEmitter();

// Listen to this event 
myEvent.on('my event', (a, b) => { 
  console.log('my event Event fired has arguments of '+ a+ b)
})

// Emit the event - Trigger 
myEvent.emit('my event', '123', 'Another argument')