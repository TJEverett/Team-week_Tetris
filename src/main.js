import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Game } from './tetris.js';

$(document).ready(function () {
  $('#start').click(function () {
    let tetris = new Game();

    // function control(e) {
    //   if (e.keyCode === 39)
    //     moveright()
    //   else if (e.keyCode === 38)
    //     rotate()
    //   else if (e.keyCode === 37)
    //     moveleft()
    //   else if (e.keyCode === 40)
    //     moveDown()
    // }

    // document.addEventListener('keydown', control);
  });
});