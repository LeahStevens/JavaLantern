'use strict';
var $color;

// // -------------------------------------------------------------------- //

$(document).ready(initialize);

function initialize(fn, flag){
  $(document).foundation();
  turnHandlersOn();
}

// // -------------------------------------------------------------------- //



function turnHandlersOn(){
  $('#clearBtn').on('click', clickClearFaces);
  // $('#yellow-paint').on('click', clickYellowPaint);
  // $('#black-paint').on('click', clickBlackPaint);
}

function turnHandlersOff(){
  $('#clearBtn').off('click');
  $('#yellow-paint').off('click');
  $('#black-paint').off('click');
}

// -----------------------Functions------------------------------- //


$(function() {
  $('#draw').sketch();
});

$(function() {
  $.each(['black', 'yellow'], function() {
    $('#pumpkinTools .tools').append("<a href='#draw' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
  });
  $('#draw').sketch();
});
// function clickYellowPaint(){

//     $color = $('#draw').sketch({defaultColor: 'yellow'});

// }
// function clickBlackPaint(){

//     $color = $('#draw').sketch({defaultColor: 'black'});

// }



function clickClearFaces(){
  $('#draw').remove();
  var canvas = $('<canvas>').attr({id: 'draw', width: '650px', height: '500px'});
  $(canvas).appendTo('#appendCanvas');
  $(function() {
    $('#draw').sketch();
  });
}


// ---------------------------------End----------------------------------- //
