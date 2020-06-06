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
      alert('you pressed a key')
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()

});
