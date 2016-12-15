// fix this up

// var fs = require("fs");
// var inquirer = require("inquirer");

// function ClozeCard(text, cloze) {
//     this.cardCloze = cloze;
//     this.cardText = text;
//     this.cardWhole = this.cardCloze + " " + this.cardText;
    
//     this.displayCardInfo = function() {
//         console.log("Cloze " + this.cardCloze + " " + "Text: " + this.cardText);
//     }

//     this.writeCardInfo = function() {
//         var writeCard = this.cardWhole + "\r\n";

//         fs.appendFile("cloze.txt", writeCard); 
//     }

//     this.displayClozeDeleted = function() {
//     	var cloze = this.cardWhole.replace(this.cardCloze,"...");
//     	return cloze;
//     }
// };

// function createCard() {
//     inquirer.prompt([
//         {
//             name: "cloze",
//             message: "Enter the cloze part of the flashcard: "
//         }, {
//             name: "text",
//             message: "Enter the whole text of the flashcard: "
//         }, {
//             type: "confirm",
//             message: "Display cloze deleted flashcard?",
//             name: "display",
//             default: true
//         }, {
//             type: "confirm",
//             message: "Do you wish to add another cloze flashcard?",
//             name: "continue",
//             default: true
//         }
//     ]).then(function(answers) {
//         var card = new ClozeFlashCard(answers.text, answers.cloze);
//         card.writeCardInfo();

//         if(answers.display === true)
//         	console.log(card.displayClozeDeleted());

//         if(answers.continue === true)
//             createCard();
//         else
//             console.log("Please see cloze.txt for your newly created flashcards.")
//     });
// }

// createCard();
