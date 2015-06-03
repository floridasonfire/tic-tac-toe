"use strict";

function Player(mark) {
  this.mark = mark;
};

function Space(xcoordinate, ycoordinate) {
  this.xcoordinate = xcoordinate;
  this.ycoordinate = ycoordinate;
  var markBy = " ";
  this.markBy = markBy
};

Space.prototype.mark_by = function(markingPlayer){
  this.markBy = markingPlayer;
  console.log(this.markBy)

};

function Board() {
  var boardArray = []
  this.boardArray = boardArray

  boardArray.push(new Space(1,1));
  boardArray.push(new Space(2,1));
  boardArray.push(new Space(3,1));
  boardArray.push(new Space(1,2));
  boardArray.push(new Space(1,3));
  boardArray.push(new Space(2,2));
  boardArray.push(new Space(3,2));
  boardArray.push(new Space(2,3));
  boardArray.push(new Space(3,3));
}

//jQuery
// $( document ).ready(function() {
//
// }
