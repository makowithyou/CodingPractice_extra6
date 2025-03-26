const MainImg = document.getElementById("MainImg");
addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            const async = async()=>{
                MainImg.classList.toggle("fadeout");
                const promise = new Promise((resolve)=> {
                    setTimeout(()=> resolve(), 500);
                });
                await promise;
                MainImg.setAttribute("src", src);
                MainImg.setAttribute("alt", alt);
                MainImg.classList.toggle("fadeout");
            }
            async();
        }
    }
)


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
