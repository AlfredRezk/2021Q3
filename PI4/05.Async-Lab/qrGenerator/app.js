const colors = [
  { Red: '255-0-0' },
  { Green: '0-255-0' },
  { Blue: '0-0-255' },
  { Black: '0-0-0' },
  {White:'255-255-255'}
]

const formats = ['png', 'gif', 'jpeg', 'jpg', 'svg', 'eps'];
const inputText = document.getElementById('input-text');
const width = document.getElementById('width');
const height = document.getElementById('height');
const bgColor = document.getElementById('bg-color');
const textColor = document.getElementById('text-color');
const formatInput = document.getElementById('format-input');


function DOMUI() {
  
  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('select');


    colors.forEach(color => {
      bgColor.innerHTML += `<option value=${Object.values(color)[0]}>
        ${Object.keys(color)[0]}
      </option>`
    })

    textColor.innerHTML = bgColor.innerHTML

    formats.forEach(format => {
      formatInput.innerHTML +=`<option value=${format}> ${format}</option>`
    })

    let instances = M.FormSelect.init(elems, {});

  })
}

DOMUI();