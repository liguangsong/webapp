/**
 * Created by Kai on 2017/4/17.
 */
$(function(){
   if($(".catalog").length==0&&$(".readTems").length!==0){
        $(".bird img").attr("src","../img/bird_single.png")
    }else if($(".catalog").length==0&&$(".readTems2").length!==0){
        $(".bird img").attr("src","../img/bird_single.png")
    } else if($(".catalog").length==0){
        $(".bird img").attr("src","../img/bird_long.png")
    }

    if(window.localStorage.getItem('version')=="infant"){
        $('.logo img').attr('src','../img/infant_logo.png');
    }else{
        $('.logo img').attr('src','../img/child_logo.png')
    }
});

