$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(this).find(".sub").stop().slideUp();
    }
);

$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".notice").hide();
        $(".gallery").css("display","flex");
    }
);

// $(".tab li:eq(0) a").click

$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);