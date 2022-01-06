class EventObserver{ 
  constructor(){ 
    this.observers = []
  }

  subscribe(fn){ 
    this.observers.push(fn);
    console.log(`You are now subscribe to ${fn.name}`)
  }

  unSubscribe(fn){ 
    this.observers = this.observers.filter(item => item != fn)
    console.log(`You are now unsubscribed from ${fn.name}`)
  }

  fire(){ 
    this.observers.forEach(fn=> fn.call())
  }
}

// Handler

const getTime = function () { 
  console.log(`Current Seconds ${new Date().getSeconds()}`)
}

const click = new EventObserver()

// Event Listeners 
document.getElementById('sub').addEventListener('click', () => { click.subscribe(getTime) })
document.getElementById('fire').addEventListener('click', () => { click.fire() })
document.getElementById('unsub').addEventListener('click', () => { click.unSubscribe(getTime) })


