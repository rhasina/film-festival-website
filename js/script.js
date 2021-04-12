/* Mobile menu */
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/* Films menu */
$('.films .btn-group .btn').on("click", function() {
    $('.films .btn-group .active').not(this).removeClass('active');
    $(this).addClass('active');
  });

$('.films [data-toggle="collapse"]').on('click',function(e){
    var idx = $(this).index('[data-toggle="collapse"]');
    if (idx == $('.collapse.show').index('.collapse')) {
        // prevent collapse
        e.stopPropagation();
    }
});





  



