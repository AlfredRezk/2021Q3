function printDeckOfCards(cards) {

  // Validate cards input is an array 
  if (!Array.isArray(cards)) return false;
  // ["AS", "10D", "KH", "2C"];
  let stringCheck = cards.every(card => typeof card === 'string');
  if (!stringCheck) return false;

  // output array 
  let cardsArr = [];
  let invalid;

  // loop through the cards 
  cards.forEach(card => {
    // parse the card string 
    if (card.length > 3 || card.length < 2) {
      throw new Error('Invalid face or suit')
    }

    let ca = card.split('');
    let suit = ca.pop();

    let face = ca.join("");
  
    let cardObj;
    try {
      cardObj = makeCard(face, suit);
      cardsArr.push(cardObj.toString());

    } catch (e) {
      // in case creating the card throw error we need to know which card
      invalid = card;
    }

    if (invalid) {
      console.log('Invalid Card: ' + invalid);
      return;
    }

  })

   console.log(cardsArr.join(" "));

  

  function makeCard(face, suit) {
		const validFaces = [
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"J",
			"Q",
			"K",
			"A",
		];
		const validSuits = ["S", "H", "D", "C"];

		// Validation for the face and suit inputs
		if (!validFaces.includes(face)) {
			throw new Error("Error");
		}

		if (!validSuits.includes(suit)) {
			throw new Error("Error");
		}

		let card = {
			_face: face,
			_suit: suit,
			get face() {
				return this._face;
			},

			set face(f) {
				if (!validFaces.includes(f)) {
					throw new Error("Error");
				} else {
					this._face = f;
				}
			},

			get suit() {
				return this._suit;
			},
			set suit(s) {
				if (!validSuits.includes(s)) {
					throw new Error("Error");
				} else {
					this._suit = s;
				}
			},
			toString() {
				let suitSymbols = {
					S: "\u2660",
					D: "\u2666",
					C: "\u2663",
					H: "\u2665",
				};

				return card.face + suitSymbols[card.suit];
			},
		};

		return card;
	}

}

module.exports = printDeckOfCards;
