$('.mycheki').click(function() {
    $('.mycheki-sub').toggleClass('hide');
});
var count = 0;
$('.banner-title').click(function() {
    count++;
    if (count%2==0){
        $('.banner-contwrap').css({display: 'block'});
    }else {
        $('.banner-contwrap').css({display: 'none'});
    }
})

$('.banner-text li:nth-child(2)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(2)').toggleClass('hide');
})

$('.banner-text li:nth-child(3)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(3)').toggleClass('hide');
})

$('.banner-text li:nth-child(4)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(4)').toggleClass('hide');
})

$('.banner-text li:nth-child(5)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(5)').toggleClass('hide');
})

$('.banner-text li:nth-child(6)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(6)').toggleClass('hide');
})


$('.banner-text li:nth-child(7)').hover(function() {
    $('.banner-img li:nth-child(1)').toggleClass('hide');
    $('.banner-img li:nth-child(7)').toggleClass('hide');
})