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
      console.log(e.which)
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()

});
