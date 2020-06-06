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
  $('#typing').on('keydown', function(e) {
      console.log(e)
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()

});
