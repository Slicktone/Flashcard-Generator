var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard(text, cloze) {
    this.cardCloze = cloze;
    this.cardText = text;
    this.cardTotal = this.cardCloze + " " + this.cardText;

    this.writeCard = function() {
        var writeCard = this.cardWhole + "\n";

        fs.appendFile("cloze.txt", writeCard); 
    }

    this.displayClozeDeleted = function() {
    	var cloze = this.cardWhole.replace(this.cardCloze,"...");
    	return cloze;
    }
}

module.exports = ClozeCard;
