var ahight = $("#alert").height;
function login() {
    let email = document.querySelector("#login_email").value;
    let password = document.querySelector("#login_password").value;
    if (email == "") {
        $("#alert").fadeTo("slow", 1).html("E-mail required for login")
    }
    else if (password == "") {
        $("#alert").fadeTo("slow", 1).html("Password required for login");
    }
    else if (email == "Sujal" && password == "123") {
        $(".login-page").hide(500)
        $(".subcontent").fadeTo(500, 1).show(500)
        setTimeout(function () {
            $(".home-page").fadeTo(500, 1).show(1)
        }, 500)
    } else {
        $("#alert").fadeTo("slow", 1).html("Invalid arguments");
    }
    setTimeout(function () {
        $("#alert").fadeTo("slow", 0).hide(1)
    }, 5000)
}

$(document).ready(function () {
    var login_card = $("#login_card");
    var register_card = $("#register_card");
    var lheight = login_card.height();
    var rheight = register_card.height();

    $(".home-page").hide(1)
    $(".about-us").hide(1)
    $(".cont-us").hide(1)
    $(".subcontent").hide(1)
    $(".blackb").hide(1)
    $(".login-page").show(1)
    $(".monuments").hide(1)


    register_card.animate({ height: "10vh", opacity: "1" }, 1);
    login_card.animate({ height: lheight, opacity: "1" }, 1);
    register_card.hide(1)
    login_card.show(1)
    $("#slider").animate({ opacity: "1" }).html("Login")
    $("#login_email").focus()
    $("#alert").hide(1)

    $("#switch_card_to_register").click(function () {
        login_card.animate({ height: "10vh", opacity: "1" }, "slow");
        register_card.animate({ height: rheight, opacity: "1", top: "" }, "slow");
        login_card.hide("slow")
        register_card.show("slow")
        setTimeout(function () {
            $("#register_email").focus()
        }, 900)
        $("#slider").animate({ opacity: "0" }, 1).html("Login")
        $("#slider").animate({ opacity: "1" }, 500).html("Register")

    });
    $("#switch_card_to_login").click(function () {
        register_card.animate({ height: "10vh", opacity: "1" }, "slow");
        login_card.animate({ height: lheight, opacity: "1" }, "slow");
        register_card.hide("slow")
        login_card.show("slow")
        setTimeout(function () {
            $("#login_email").focus()
        }, 900)
        $("#slider").animate({}).html("Login")
        $("#slider").animate({ opacity: "0" }, 1).html("Register")
        $("#slider").animate({ opacity: "1" }, 500).html("Login")
    });


    $(".pt2").fadeTo(0).hide(1)
    $(".pt3").fadeTo(0).hide(1)
    $(".pt4").fadeTo(0).hide(1)
    $(".pt5").fadeTo(0).hide(1)
    $(".pt6").fadeTo(0).hide(1)
    setInterval(function () {
        setTimeout(function () {
            $(".pt1").fadeTo(500, 0).hide(1)
            $(".pt2").fadeTo(500, 1).show(1)
        }, 5000)
        setTimeout(function () {
            $(".pt2").fadeTo(500, 0).hide(1)
            $(".pt3").fadeTo(500, 1).show(1)
        }, 5000)
        setTimeout(function () {
            $(".pt3").fadeTo(500, 0).hide(1)
            $(".pt4").fadeTo(500, 1).show(1)
        }, 15000)
        setTimeout(function () {
            $(".pt4").fadeTo(500, 0).hide(1)
            $(".pt5").fadeTo(500, 1).show(1)
        }, 5000)
        setTimeout(function () {
            $(".pt5").fadeTo(500, 0).hide(1)
            $(".pt6").fadeTo(500, 1).show(1)
        }, 25000)
        setTimeout(function () {
            $(".pt6").fadeTo(500, 0).hide(1)
            $(".pt1").fadeTo(500, 1).show(1)
        }, 30000)
    }, 30000)

    $(".p2").fadeTo(0).hide(1)
    $(".p3").fadeTo(0).hide(1)
    $(".p4").fadeTo(0).hide(1)
    setInterval(function () {
        setTimeout(function () {
            $(".p1").fadeTo(500, 0).hide(1)
            $(".p2").fadeTo(500, 1).show(1)
        }, 5000)
        setTimeout(function () {
            $(".p2").fadeTo(500, 0).hide(1)
            $(".p3").fadeTo(500, 1).show(1)
        }, 5000)
        setTimeout(function () {
            $(".p3").fadeTo(500, 0).hide(1)
            $(".p4").fadeTo(500, 1).show(1)
        }, 15000)
        setTimeout(function () {
            $(".p4").fadeTo(500, 0).hide(1)
            $(".p1").fadeTo(500, 1).show(1)
        }, 5000)
    }, 20010)

    $(".sardar").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").hide(1)
        $("#fort").hide(1)
        $("#sun").hide(1)
        $("#rani").hide(1)
        $("#qutub").hide(1)
        $("#sou").fadeTo(500, 1).show(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })
    $(".taj").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").fadeTo(500, 1).show(1)
        $("#fort").hide(1)
        $("#sun").hide(1)
        $("#rani").hide(1)
        $("#qutub").hide(1)
        $("#sou").hide(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })
    $(".red").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").hide(1)
        $("#fort").fadeTo(500, 1).show(1)
        $("#sun").hide(1)
        $("#rani").hide(1)
        $("#qutub").hide(1)
        $("#sou").hide(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })
    $(".rani").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").hide(1)
        $("#fort").hide(1)
        $("#sun").hide(1)
        $("#rani").fadeTo(500, 1).show(1)
        $("#qutub").hide(1)
        $("#sou").hide(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })
    $(".sun").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").hide(1)
        $("#fort").hide(1)
        $("#sun").fadeTo(500, 1).show(1)
        $("#rani").hide(1)
        $("#qutub").hide(1)
        $("#sou").hide(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })
    $(".qutub").click(function () {
        $(".home-page").fadeTo(500, 0).hide(500)
        $(".about-us").fadeTo(500, 0).hide(500)
        $(".cont-us").fadeTo(500, 0).hide(500)
        $(".monuments").fadeTo(500, 1).show(1)
        $("#taj").hide(1)
        $("#fort").hide(1)
        $("#sun").hide(1)
        $("#rani").hide(1)
        $("#qutub").fadeTo(500, 1).show(1)
        $("#sou").hide(1)
        $(".blackb").fadeTo(500, 1).show(1)
    })


    $("#home").click(function () {
        $("#home").animate({ backgroundColor: "black" }, "slow")
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => {
            $(".home-page").show(500).fadeTo(500, 1)
            $(".cont-us").hide(500).fadeTo(500, 0)
            $(".about-us").hide(500).fadeTo(500, 0)
            $(".blackb").fadeTo(500, 0).show(1)
            setTimeout(() => {
                $(".monuments").fadeTo(500, 0).hide(1)
            }, 500);
        }, 500);
    })
    $("#contectus").click(function () {
        $("#home").animate({ backgroundColor: "black" }, "slow")
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => {
            $(".home-page").hide(500).fadeTo(500, 0)
            $(".cont-us").show(500).fadeTo(500, 1)
            $(".about-us").hide(500).fadeTo(500, 0)
            $(".blackb").fadeTo(500, 0).show(1)
            setTimeout(() => {
                $(".monuments").fadeTo(500, 0).hide(1)
            }, 500);
        }, 500);
    })
    $("#aboutus").click(function () {
        $("#home").animate({ backgroundColor: "black" }, "slow")
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => {
            $(".home-page").hide(500).fadeTo(500, 0)
            $(".cont-us").hide(500).fadeTo(500, 0)
            $(".about-us").show(500).fadeTo(500, 1)
            $(".blackb").fadeTo(500, 0).show(1)
            setTimeout(() => {
                $(".monuments").fadeTo(500, 0).hide(1)
            }, 500);
        }, 500);
    })
    lastscrolltop = 0
    $(window).scroll(function (event) {
        var scp = $(this).scrollTop()
        if (scp > lastscrolltop) {
            document.querySelector(".nev-bar").style.fontSize = "25px";
            document.querySelector(".nev-bar").style.backgroundColor = "#00000000"
            document.querySelector("#home").style.backgroundColor = "#00000000"
            document.querySelector("#contectus").style.backgroundColor = "#00000000"
            document.querySelector("#aboutus").style.backgroundColor = "#00000000"
        }
        else if (scp == lastscrolltop) {
            // nothing
        } else {
            document.querySelector(".nev-bar").style.fontSize = "30px";
            document.querySelector(".nev-bar").style.backgroundColor = "#ffffff33"
            document.querySelector("#home").style.backgroundColor = "#0000004d"
            document.querySelector("#contectus").style.backgroundColor = "#0000004d"
            document.querySelector("#aboutus").style.backgroundColor = "#0000004d"
        }
        lastscrolltop = scp
    })
});
