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
  $('input #typing').on('keypress', function(e) {
      console.log(e.target)
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()

});
