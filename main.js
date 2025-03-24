const MainImg = document.getElementById("MainImg");
MainImg.setAttribute("src", "https://github.com/makowithyou/CodingPractice_extra6/blob/main/img/mainvisual1.jpg?raw=true");
MainImg.setAttribute("alt", "mainvisual1");

addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            MainImg.classList.add("fadeout");
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            MainImg.setAttribute("src", src);
            MainImg.setAttribute("alt", alt);
            // setTimeout(1000);
            // MainImg.classList.toggle("fadeout");
        }
    }
)
