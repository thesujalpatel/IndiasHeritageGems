window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".nev-bar").style.fontSize = "30px";
    } else {
        document.querySelector(".nev-bar").style.fontSize = "40px";
    }
}
$(document).ready(function () {
    $("#home").click(function () {
        $(".monuments").fadeTo(2000, 0).hide(1)
        $(".home-page").show(2000)
        $(".home-page").fadeTo(1000, 1)
        $(".blackb").fadeTo(2000, 0).hide(1)
    })
    $("#contectus").click(function () {

    })
    $("#aboutus").click(function () {

    })
})