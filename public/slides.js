var counter = 1;



$(".project-1").hover(()=>{
    if(counter != 1)
    {
        $(".exp").fadeOut(()=>{
            $(".exp").text("1").fadeIn();
            $(".proj-desc").text("Nova Fashion").fadeIn();
            counter = 1;
        });
    }
})

$(".project-2").hover(()=>{
    $(".exp").fadeOut(()=>{
        $(".exp").text("2").fadeIn();
        $(".proj-desc").text("What Happened Today").fadeIn();
        counter = 0;
    });
})

$(".project-3").hover(()=>{
    $(".exp").fadeOut(()=>{
        $(".exp").text("3").fadeIn();
    });
})

$(".project-1").on("click", ()=>{
    window.open("https://nova-ghkp.onrender.com");
});

$(".project-2").on("click", ()=>{
    window.open("https://wht.onrender.com");
});
