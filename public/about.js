$("p").delay(2000).fadeOut(()=>{
    $("p").text("I am a highly motivated and results-oriented individual").fadeIn().delay(3000).fadeOut(()=>{
        $("p").text("I am always looking for new challenges and opportunities to learn and grow.").fadeIn().delay(3000).fadeOut(()=>{
            $("p").text("I am a team player that always willing to go the extra mile to help my clients succeed.").fadeIn();
        });
    });
});
