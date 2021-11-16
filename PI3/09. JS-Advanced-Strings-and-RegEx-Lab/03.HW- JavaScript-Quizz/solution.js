function solve() {
  let correct = 0;
  let questionCount = 0;
  let totalQuestions = 3;
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']

  // Get all sections as array 
  let sections = document.getElementsByTagName('section');

  let section = sections[questionCount];

  let buttons = document.querySelectorAll('.answer-text');
  let msg = document.querySelector('.results-inner h1');

  buttons.forEach(button => {
    button.addEventListener('click', userChoice)
  })


  function userChoice(e) {
    questionCount++;
    let tagName = section.nextElementSibling.tagName;
    if (tagName === 'SECTION') {
      let nextSection = section.nextElementSibling;
      // hide current and view next section
      section.classList.toggle('hidden');
      nextSection.classList.toggle('hidden');
      section = nextSection;
    } else {
      // hide current section
        section.classList.toggle("hidden");
    }

    if (correctAnswers.includes(e.target.innerText)) correct++;

    // display message 

   document.querySelector("#quizzie>ul").style.display = 'block';
    if (questionCount == totalQuestions) {
      if (correct == totalQuestions) {
        msg.textContent = "You are recognized as top JavaScript fan!";
      } else {
        msg.textContent = `You have ${correct} right answers`
      }
    }
  }

}


