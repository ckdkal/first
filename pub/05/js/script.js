$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);
$(".tab1").click(
    function (){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function (){
        $(".notice").hide();
        $(".gallery").css("display","flex");
    }
);

$(".open").click(
    function (){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function (){
        $("#popup").fadeOut();
    }
);