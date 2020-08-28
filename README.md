# _Team-week project_

#### _Tetris_

#### A collaboration By _Matthew, Tristen, and Andrew_

## Description

_This is our first team project and for it we decided to create Tetris from scratch. It will look and play like Tetris._
__

## Setup/Installation Requirements
* Install node and npm
* Download the files from [https://github.com/AndrewMMickel/Team-week_Tetris](https://github.com/AndrewMMickel/Team-week_Tetris) and save it in a folder
* Clone/download the repo and type 'npm install' inside of a terminal 
* Run "npm run start" to open the program
* Press start to play game

## Known Bugs

_No known bugs. Will update with changes_

## Specs
|Spec|Input|Output|
|----|------|------|
|Draw a 12 x 20 grid|Page loads| Draw the grid|
|The game begins when the player presses the start button|"Start" button|Game begins|
|Have a random piece appear at the top of the board|"Start" button|Random piece appears|
|At the top-left of the screen the next piece that'll appear will be shown before it is in play|Piece put onto board|New piece chosen and shown|
|At the top right of the screen the game will keep score of how many lines have been cleared|Tetris line is cleared|"Score" goes up by 1|
|Have the player be able to move the piece left or right|Left arrow key|piece moves left|
|Have the player be able to move the piece down|Down arrow key|Piece moves down|
|Have the player be able to rotate the piece if there is room|Up arrow key|Piece rotates clockwise 90 degrees|
|The piece in play will move downward at timed intervals until it can no longer move downwards|The timed interval passes|piece in play moves down by one line|
|For every 3 points earned in the player's score decrease the time interval by 10 percent multiplicatively|Score reaches 3 points|Turn time set to 900 miliseconds|
|When a block stops moving check if a row has been completed|Block stops moving |The line clears|
|Check to see if a piece is placed on the top line|piece is place on top line|Game Over|
|Let the game be paused|Press Pause button|Game pauses|
|Let the game be resumed|Press "Pause" button |Game resumes|
|Let player control volume|Volume control slider is adjusted|Volume changes|
|Game has music|Start Button|Music starts|
|Game has sound effects|Row is completed|Zap sound effect is played|


## Support and contact details

_email andrew.m.mickel@gmail.com if there are any concerns_

## Technologies Used

_Heavy use of Webpack, Bootstrap, jQuery, and JavaScript_

### License

MIT License

Copyright (c) [2020] **[Andrew Mickel, Matthew LeDoux, Tristen Everett]**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.