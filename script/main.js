let bars = document.querySelector(".bars");

//페이지 스크롤시 header를 줄이는 코드
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let bottomBar = document.querySelector(".header .main-wrap .bottom-bar");
    // 100인이유 
    if (window.pageYOffset > 100) {
        document.querySelector(".header .main-wrap .top-bar").style.display = "none";
        document.querySelector(".header-tab-menu").style.top = "-150px";
        header.style.height = "50px";
        bottomBar.style.bottom = "-50px";
        openmenu = 0;
    } else {
        document.querySelector(".header .main-wrap .top-bar").style.display = "flex";
        header.style.height = "130px";
        bottomBar.style.bottom = 0;
    }
})

//탭 메뉴 온/오프 코드

// bars.addEventListener("click", menuOpen);

let openMenu = 0;
// let openMenu = true;
function menuOpen() {
    let headerTabMenu = document.querySelector(".header-tab-menu");
    // 만약 닫혀있다면 열어주고(top값을 130px로 변경해주고)
    if (openMenu == 0) {
        headerTabMenu.style.top = "130px";
        openMenu = 1;
    } else if (openMenu == 1) {
        headerTabMenu.style.top = "-120px";
        openMenu = 0;
    }
    // 그렇지 않다면 (top값을 -120px로 변경해준다)

}
