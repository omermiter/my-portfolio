var counter = 1;



$(".project-1").hover(()=>{
    if(counter != 1)
    {
        $(".exp").fadeOut(()=>{
            $(".exp").text("1").fadeIn();
            counter = 1;
        });
    }
})

$(".project-2").hover(()=>{
    $(".exp").fadeOut(()=>{
        $(".exp").text("2").fadeIn();
        counter = 0;
    });
})

$(".project-3").hover(()=>{
    $(".exp").fadeOut(()=>{
        $(".exp").text("3").fadeIn();
    });
})
