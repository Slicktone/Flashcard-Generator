# Flashcard-Generator

# Overview

## The backend for a basic flashcard application.
### The backend will essentially constitute an API that allows users to create two types of flashcards.
### Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").
### Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")
### As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:


# Limitations and Direction
### Create a new GitHub repository, named Clashcard-Generator or something similar. Clone this to your local drive.
### Create a BasicFlashcard constructor. It should accept front and back arguments.
### Create a ClozeFlashard constructor. It should accept text and cloze arguments.
### ClozeFlashcard should have a method that returns only the cloze-deleted portion of the text.
### You are free to experiment with the other details of your implementation, but you must store at least one property, and equip cloze-deleted flashcards with at least one additional method.
### Your application should provide a way for users to save any flashcards they might create to a text file.
### What data should you save?
### Where might it make sense to add a method for saving flashcards?
### As a bonus, create a frontend that uses your flashcard data. This front-end can be either a command-line prompt or a browser-based application.
### When passed a basic flashcard, this program should present the front text; wait for user input; and then display the back text.
### When passed a cloze-deleted flashcard, this program should present the partial text; wait for user input; and then display the full text.