$(document).ready(function(){
    // 메뉴
    $('.main-nav > li').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
    });

    //서브메뉴
    $('.sub-nav > li').click(function(e){
        e.stopPropagation();
        $(this).addClass('on').siblings().removeClass('on');
    });
})