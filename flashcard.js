var inquirer = require('inquirer');
var fs = require('fs');


var FlashCard = function(front, back) {
    // var FlashCards = [];
    this.front = front;
    this.back = back;
    this.display = function() {
        console.log("Front: " + front + "\n Back: " + back);
    }
    this.writeCard = function() {
        var writeNew = "Front: " + this.front + " Back: " + this.back + "\n";
        // text file needs to be created
        fs.appendFile("app.txt", writeNew); 
    }

}
function createCard() {
        inquirer.prompt([
        {
            type: "input",
            message: "Front text",
            name: "front"
        },
        {
            type: "input",
            message: "Back text",
            name: "back"
        }
        ]).then(function(input){
            // should write and store any new FlashCard info
            var NewCard = new FlashCard(input.front, input.back);
                NewCard.writeCard();
        });
    }
createCard();

module.exports = (FlashCard);
// try this out
// function BasicFlashCard (front, back) {
//     this.front = front;
//     this.back = back;
//     this.printData = function(){
//         var basicCardData = "Question: " + this.front + "\n" + "Answer: " + this.back;
    
//         fs.appendFile("app.txt", basicCardData, (err) => {
//         if(err) throw err;
//         console.log("Data saved to app.txt");
//         });
//      }
//      this.printData();
// }

// BasicFlashCard("front", "back");

// module.exports = (BasicFlashCard);