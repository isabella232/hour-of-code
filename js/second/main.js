var loopCounter = 0;

function addStudent() {
  var studentNameField = $('#studentName');
  var length = $('#loop-array li').length;
  $('#loop-array').append('<li class="list-group-item" index="' + length + '" id="name' + length + '" onclick="deleteName(' + length + ')">' + studentNameField.val() + '</li>');
  studentNameField.val('');
  studentNameField.focus();
}

function clearLoopResults() {
  $('#loop-array').empty();
}

function runLoop() {
  loopCounter = 0;
  // displayName();
  $('#modalNames').empty();
  calcPercentComplete(0);
  $('#loopModal').modal('show');
  $('#loop-array li').each(function() {
    var nameItem = this;
    setTimeout(function() {
      var index = $(nameItem).attr('index');
      $('#modalNames').append('<div class="row"><div class="col-md-6">' + nameItem.innerHTML + '</div><div class="col-md-6"><img src="img/second/' + index + '.jpeg" class="dance-img"></div></div>')
      calcPercentComplete(Number.parseInt(index)+1);
      $('#loopModal').animate({ scrollTop: $('#modalNames').height() }, "slow");
    }, loopCounter*1000);
    loopCounter++;
  });
}

function deleteName(num) {
  $('#name' + num).remove();
}

function calcPercentComplete(index) {
  var percentDone = (index / $("#loop-array li").length) * 100;
  $('#progress-bar').css('width', percentDone + '%');
}
$(document).ready(function() {

  $('#studentName').keypress(function (e) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      addStudent();
    }
  });
});
