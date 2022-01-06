const UICtrl = (function () { 
  let text = "Hello world";

const $ = (el) => document.querySelector(el);

const changeText = () => {
	$("#h1").textContent = text;
};

const removeText = () => {
	$("#h1").textContent = "";
  };
  
  return {
    changeText,
    removeText
  }

})()


UICtrl.changeText()