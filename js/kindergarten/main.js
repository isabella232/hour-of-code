var intObj = null;
var danceCounter = 1;
var totalImages = 0;
// $('#imgModal').modal('show');

function clickImage(element) {
  var newRow = $('');
  var clone = $(element).clone().addClass('dance-alorithm-img');
  clone.removeAttr('id');
  clone.attr('onclick', 'deleteImage(this)');
  clone.prependTo('#dance-routine');
}

function deleteImage(element) {
  $(element).remove();
}

function clearDanceAlgorithm() {
  $("#dance-routine").empty();
}

function runDanceAlgorithm() {
  totalImages = $("#dance-routine img").length;
  danceCounter = 1;
  displayRunImg();
  $('#imgModal').modal('show');
  intObj = setInterval(displayRunImg, 4000);
}

function displayRunImg() {
  if ($("#dance-routine img").length) {
    displayModalImg($("#dance-routine img")[0]);
    calcPercentComplete();
    deleteImage($("#dance-routine img")[0]);
  } else {
    if (intObj) {
      clearInterval(intObj);
      swapImg();
    }
  }
}

function pause() {
  if (intObj) {
    clearInterval(intObj);
  }
}

function displayModalImg(imgObj) {
  $('#imgModal').modal('show');
  var modalBody = $('#modalImg');
  modalBody.empty();
  $(imgObj).clone().attr('onclick', '').appendTo(modalBody);
}

function swapImg() {
  var modalImg = $('#modalImg img').first();
  $(modalImg).attr('src', 'img/kindergarten/congrats.jpeg').removeClass('dance-img');
}

function calcPercentComplete() {
  var percentDone = (danceCounter / totalImages) * 100;
  $('#progress-bar').css('width', percentDone + '%');
  danceCounter++;
}
