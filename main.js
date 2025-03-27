const MainImg = document.getElementById("MainImg");
addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            imgFadeChange(MainImg, src, alt);
        }
    }
)
async function imgFadeChange(img, src, alt) {
    img.classList.toggle("fadeout");
    await timeout(500);
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    img.classList.toggle("fadeout");
}
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}


// jquery
// $(".thumbnail").hover(
//     function() {
//         const src = $(this).attr('src');
//         const alt = $(this).attr('alt');
//         $("#MainImg").fadeTo(250, 0).then(function(){
//             $("#MainImg").attr("src", src);
//             $("#MainImg").attr("alt", alt);
//         }).then(function(){
//             $("#MainImg").fadeTo(250, 1);
//         })
//     }
// );
