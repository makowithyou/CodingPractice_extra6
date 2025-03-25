const MainImg = document.getElementById("MainImg");
addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            MainImg.classList.toggle("fadeout");
            new Promise((resolve)=> {
                setTimeout(()=>{
                    const src = e.target.getAttribute("src");
                    const alt = e.target.getAttribute("alt");
                    MainImg.setAttribute("src", src);
                    MainImg.setAttribute("alt", alt);
                    resolve();
                },500);
            }).then(()=>{
                MainImg.classList.toggle("fadeout");
            });
        }
    }
)
