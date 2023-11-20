var counter = 0;

$(".project-1").on("click", ()=>{
    if (counter === 0){
        $(".project-1").css("opacity", 0);
        $(".project-name").text("What Happened Today?");
        $(".project-par").text("A website I made from scratch do demonstarte my skills using API's. I used axios, npm, express, jquery, javascript");
        $(".project-1").css("background-image", "url('../images/Screenshot\ 2023-10-23\ 102052.png')");
        $(".numeric").text("click to continue 02 // 02");
        $(".project-1").css("opacity", 1);
        
        counter++;
    }
    else if(counter === 1){
        $(".project-1").css("opacity", 0);
        $(".project-name").text("Nova Fashion");
        $(".project-par").text("A website I built from scratch to demonstrate my skills. I used Jquery, Javascript, nodejs, npm and express to build it");
        $(".project-1").css("background-image", "url('../images/Screenshot\ 2023-10-22\ 232630.png')");
        $(".numeric").text("click to continue 01 // 02");
        $(".project-1").css("opacity", 1);
        counter = 0;
    }
});

$(".outer").hover(()=>{
    $(".project-desc").animate({width: "30%"});
    $(".project-name").css("opacity", 1);
    $(".project-par").css("opacity", 1);
    $(".numeric").css("opacity", 1);
}, ()=>{
    $(".project-desc").animate({width: "0%"});
    $(".project-name").css("opacity", 0);
    $(".project-par").css("opacity", 0);
    $(".numeric").css("opacity", 0);
})