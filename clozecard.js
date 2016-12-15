// fix this up

var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard(text, cloze) {
    this.cardCloze = cloze;
    this.cardText = text;
    this.cardWhole = this.cardCloze + " " + this.cardText;

    this.writeCardInfo = function() {
        var writeCard = this.cardWhole + "\r\n";

        fs.appendFile("cloze.txt", writeCard); 
    }

    this.displayClozeDeleted = function() {
    	var cloze = this.cardWhole.replace(this.cardCloze,"...");
    	return cloze;
    }
};

createCard();
