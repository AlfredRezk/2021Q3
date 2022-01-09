const log = (text)=> { 
  console.log(`${text}  - ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' , second: '2-digit' })}`)
} 

const add = (num1, num2) => { 
  return num1+ num2
}

module.exports = {log, add }



