const MainImg = document.getElementById("MainImg");
addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            if(MainImg.getAttribute("src") != src) {
                MainImg.classList.toggle("fadeout");
                setTimeout(() => {
                    MainImg.setAttribute("src", src);
                    MainImg.setAttribute("alt", alt);
                    MainImg.classList.toggle("fadeout");
                }, 500);
            }
        }
    }
)


// jquery
// $(".thumbnail").mouseover(function() {
//     const src = $(this).attr('src');
//     const alt = $(this).attr('alt');
//     if ($("#MainImg").attr("src") != src){
//         $("#MainImg").fadeOut(500, function(){
//             $("#MainImg").attr({src: src, alt: alt});
//             $("#MainImg").fadeIn(500);
//         })
//     }
// });
