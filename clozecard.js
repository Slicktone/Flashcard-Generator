var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard(text, cloze) {
    this.cardCloze = cloze;
    this.cardText = text;
    this.cardFull = this.cardCloze + " " + this.cardText;

    this.writeCard = function() {
        var writeCard = this.cardFull + "\n";

        fs.appendFile("cloze.txt", writeCard); 
    }

    this.showClozeDeleted = function() {
    	var cloze = this.cardFull.replace(this.cardCloze,"...");
    	return cloze;
    }
}

module.exports = ClozeCard;
