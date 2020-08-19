import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Game } from './tetris.js';

$(document).ready(function () {
  $('#start').click(function () {
    let Tetris = new Game();

    
  });
});