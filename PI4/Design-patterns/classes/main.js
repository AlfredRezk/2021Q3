class UICtrl { 
  constructor(text) { 
    this.text = text;
  }

   $(el) { 
   return document.querySelector(el); 
  }

  changeText() { 
    this.$("#h1").textContent = this.text;
  }

  removeText() { 
      this.$("#h1").textContent = '';
  }

}

const urictrl = new UICtrl('Hello world');
urictrl.changeText();


