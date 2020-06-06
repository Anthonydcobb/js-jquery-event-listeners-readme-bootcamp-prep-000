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
    if (e.which === 103) {
      alert('You pressed G')
    }
  })
}

function submitIt() {
  $('form input:last-child')
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()

});
