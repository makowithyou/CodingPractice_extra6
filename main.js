const MainImg = document.getElementById("MainImg");

addEventListener(
    "mouseover", (e) => {
        if (e.target.className == "thumbnail") {
            MainImg.classList.add("fade");
            const src = e.target.getAttribute("src");
            const alt = e.target.getAttribute("alt");
            MainImg.setAttribute("src", src);
            MainImg.setAttribute("alt", alt);
        }
    }
)
