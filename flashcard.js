var inquirer = require('inquirer');
var fs = require('fs');

console.log(Flashcard);
var Flashcard = function(front, back) {
    var flashCards = [];
    this.front = front;
    this.back = back;
    this.createCard = function() {
        inquirer.prompt([
        {
            type: "input",
            message: "Front text",
            name: "frontText"
        },
        {
            type: "input",
            message: "Back text",
            name: "backText"
        }
        ]).then(function(input){
            var newFlash = new Flashcard(input.front, input.back);
                flashCards.push(newFlash);
        });
    }

}


module.exports = Flashcard;