/**
 * Created by Jasko on 11/25/15.
 */
$(document).ready(function(){
    //导航按钮
    var navbtn = $(".nav-btn"),
        navlist = $(".nav-list");
    navbtn.on("click",toggleNav);

    function toggleNav(){
        navlist.slideToggle("slow");
    }

    //        回到顶部
    $(window).scroll(function(){
        if($(window).scrollTop() >= 700){
            $('.back-top').fadeIn(300);
        }else{
            $('.back-top').fadeOut(300);
        }
    })
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 600);});
})