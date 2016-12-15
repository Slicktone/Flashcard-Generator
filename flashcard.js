var inquirer = require('inquirer');
var fs = require('fs');


var FlashCard = function(front, back) {
    // var FlashCards = [];
    this.front = front;
    this.back = back;
    this.display = function() {
        console.log("Front: " + front.display + "\n Back: " + back);
    }
    this.writeCard = function() {
        var writeNew = "Front: " + this.front + "\n Back: " + this.back + "\n";
        // text file needs to be created
        fs.appendFile("app.txt", writeNew); 
    }

}
module.exports = FlashCard;
