$('.benefits__but-down').click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href'),
        toElement = $(attr).offset().top
  
    $('html,body').animate({
        scrollTop: toElement 
    }, {
        duration: 600
    })
  })