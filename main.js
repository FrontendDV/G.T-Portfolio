$(function(){
    $(window).scroll(function() {
        $(".iDo").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".about").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInRight")
        })
    }),
    $(window).scroll(function() {
        $(".road1").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".road2").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInRight")
        })
    }),
    $(window).scroll(function() {
        $(".road3").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".road4").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInRight")
        })
    }),
    $(window).scroll(function() {
        $(".road5").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".cross").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".web").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInUp")
        })
    });
})
