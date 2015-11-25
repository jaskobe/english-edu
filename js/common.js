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
})