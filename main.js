const MainImg = document.getElementById("MainImg");
addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            MainImg.classList.toggle("fadeout");
            setTimeout(() => {
                MainImg.setAttribute("src", src);
                MainImg.setAttribute("alt", alt);
                MainImg.classList.toggle("fadeout");
            }, 500);
        }
    }
)


// jquery
// $(".thumbnail").mouseover(
//     function() {
//         const src = $(this).attr('src');
//         const alt = $(this).attr('alt');
//         $("#MainImg").addClass("fadeout");
//         setTimeout(() => {
//             $("#MainImg").attr("src", src);
//             $("#MainImg").attr("alt", alt);
//             $("#MainImg").removeClass("fadeout");
//         }, 500);
//     }
// );
