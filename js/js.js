$(".close-popup").click(function(){
    $(".one-suc").addClass("none");
    $(".two-suc").addClass("none");
    $(".three-suc").addClass("none");
    $(".four-suc").addClass("none");
    $(".overlay").addClass("none");
    
    $(".one-suc").removeClass("show");
    $(".two-suc").removeClass("show");
    $(".three-suc").removeClass("show");
    $(".four-suc").removeClass("show");
    $(".overlay").removeClass("show");
});

$("#sas1").click(function(){
    
    $(".four-suc").removeClass("none");
    $(".four-suc").addClass("show");
    $(".overlay").removeClass("none");
    $(".overlay").addClass("show")
});
$("#zyavka").click(function(){
    
    $(".four-suc").removeClass("none");
    $(".four-suc").addClass("show");
    $(".overlay").removeClass("none");
    $(".overlay").addClass("show");
});

$("#send").click(function(){
    
    $(".three-suc").removeClass("none");
    $(".three-suc").addClass("show");
    $(".overlay").removeClass("none");
    $(".overlay").addClass("show");
});
