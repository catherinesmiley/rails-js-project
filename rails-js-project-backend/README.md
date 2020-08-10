# WordFinder App

This is an application that was built using Ruby on Rails and JavaScript. This app allows users to start a new game, enter words to gain points, and store their total points. Users can also view all other users and their total points.

Instructions are below and can be viewed at any time by clicking the Instructions button. Users must create a user account before starting a game. 

1. Click Start New Game to start a new game.
2. A word will appear on the page and you enter words, one at a time, that can be formed from that word. 
3. You will get points for each valid word that you enter. A word is valid if it is at least 4 letters, is only formed from letters found in the published word, and each letter in the published word is used only once.
4. Guess as many words as you can, then start a new game to get more points.

Scoring:
4 letter words = 1 point each
5 letter words = 2 points each
6 letter words = 3 points each

Good luck! 

## Installation

You can clone this repo with SSH or HTTPS from https://github.com/catherinesmiley/rails-js-project and open it by typing the below into your terminal:

$ git clone <>

## Usage

Change directory to rails-js-project-backend and seed the database by running rails db:seed in the terminal.

Run rails s in the terminal, then open the index.html file in your browser.

On the home page you can view instructions for the game, create a user, start  a game, and view other users' usernames and total points. Use the buttons on the page and the input field to play as many games as you'd like and to gain points while playing. 

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/catherinesmiley/rails-js-project. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct (https://www.contributor-covenant.org/).

## License

The gems used in this app are available as open source under the terms of the MIT License: https://opensource.org/licenses/MIT

## Code of Conduct

Everyone interacting in the Destinations project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
