function encodeAndDecodeMessages() {
  const [encodeBox, decodeBox] = document.querySelectorAll("textarea");
  const [encodeBtn, decodeBtn] = document.querySelectorAll('button');

  encodeBtn.addEventListener('click', () => {
    decodeBox.innerText = encodeDecode(encodeBox.value, 1);
    encodeBox.value = '';
  })

  decodeBtn.addEventListener('click', () => {
    decodeBox.innerText = encodeDecode(decodeBox.value, -1)
  })
}


function encodeDecode(string, key) {
  // convert the string to chanters array 
  let charArr = string.split('');
  //  character -> Ascii 
  // add key to the Asciicode 
  // Ascii -> character 
  let encodedArr = charArr.map(ch => {
    let ascii = ch.charCodeAt() + key;
    return String.fromCharCode(ascii);
  })

  return encodedArr.join('');
}
