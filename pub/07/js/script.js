$(".gnb li").hover(
    function (){
        $(this).find(".sub").stop().slideDown();
    },
    function (){
        $(this).find(".sub").stop().slideUp();
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
