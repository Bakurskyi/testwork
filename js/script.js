function fun1() {
    var rng=document.getElementById('r1'); //rng - это Input
    var p=document.getElementById('one');
    p.innerHTML=rng.value;
}


$('.input-file input[type=file]').on('change', function(){
    let file = this.files[0];
    $(this).next().html(file.name);
});

$('.header__nav-mobile--burger').on('click', function () {
    $('.header__nav-mobile--list').addClass('open');
    $('body').addClass('hidden_body');
})
$('.header__nav-mobile-burger--close').on('click', function () {
    $('.header__nav-mobile--list').removeClass('open');
    $('body').removeClass('hidden_body');
})

$(".js-example-responsive").select2({
    width: 'resolve',
});


