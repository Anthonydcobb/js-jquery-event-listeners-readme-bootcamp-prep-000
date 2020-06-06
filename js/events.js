function getIt() {
  $('p').on('click', function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $(window).on('load', function(e) {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keypress', function(e) {
      if (e.which === 73) {
        alert('You pressed G')
      }
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()

});
