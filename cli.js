var inquirer = require('inquirer');
var fs = require('fs');
var FlashCard = require('./flashcard.js');
var ClozeCard = require('./clozecard.js');


// input inquirer UI here.
// User should be able to create a Basic Flashcard (front, back)

    // (front) is the question.
    // (back) has the answer.
// User should be able to create Cloze Flashcard (text, cloze)

    // (text) is the question with ellipses.
        // ex. (...)who is the best?
    // (cloze) is the hidden answer included into the question.

/* For completion: 
    - User must be able to save created flashcards to a text file.
    - Store at least one property, 
    - Equip cloze flashcards with at least one additional method. */


    inquirer.prompt([
    {
        type: "list",
        message: "Please select your card type",
        choices: ["Flashcard", "Clozecard"],
        name: "Card"
    },
    {
        type: "list",
        message: "Do you want to create a new Card? or Study?",
        choices: ["New", "Study Time!"],
        name: "Choice"
    }


]).then(function(input) {
    if(input.Card === "Flashcard" && input.Choice === "New") {
        console.log("Welcome to the Flashcard creation menu!");
        console.log("-----------------------------------------");
            inquirer.prompt([
                {
                    type: "input",
                    message: "Whats on the Front?",
                    name: "front"
                },
                {
                    type: "input",
                    message: "Whats on the Back?",
                    name: "back"
                }
            ]).then(function(input){
                var NewCard = new FlashCard(input.front, input.back);
                NewCard.writeCard();
                console.log("Here is your created card " + input.front + " " + input.back);
            });

    } else if (input.Card === "Flashcard" && input.Choice === "Study Time!") {
        console.log("Time to study! Are you ready?");
        FlashCard.display(front);
            setTimeout(function() {
                FlashCard.display(back);
            }, 4000);

    } else if (input.Card === "Clozecard" && input.Choice === "New") {
        console.log("Welcome to the Clozecard creation menu!");
        console.log("-----------------------------------------");
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the Cloze Text?",
                    name: "cloze"
                },
                {
                    type: "input",
                    message: "Whats on the Back?",
                    name: "back"
                }
            ]).then(function(input){
                var card = new ClozeFlash(input.cloze, input.text);
                card.writeCard();
                console.log();
            });

    } else if (input.Card === "Clozecard" && input.Choice === "Study Time!") {
        console.log("Get ready for your ultimate studytime with ClozeCards!");
        Clozecard.displayCloze;
     }

}); 