function login() {
    let email = document.querySelector("#login_email").value;
    let password = document.querySelector("#login_password").value;
    if (email == "") {
        alert("E-mail required for login");
    }
    else if (password == "") {
        alert("Password required for login");
    }
    else if (email == "Sujal" && password == "123") {
        location.href = "home.html";
    } else {
        alert("Invalid arguments");
    }
}

$(document).ready(function () {
    var login_card = $("#login_card");
    var register_card = $("#register_card");
    var lheight = login_card.height();
    var rheight = register_card.height();

    register_card.animate({ height: "10vh", opacity: "1" }, 1);
    login_card.animate({ height: lheight, opacity: "1" }, 1);
    register_card.hide(1)
    login_card.show(1)
    $("#slider").animate({ opacity: "1" }).html("Login")
    $("#login_email").focus()

    $("#switch_card_to_register").click(function () {
        login_card.animate({ height: "10vh", opacity: "1" }, "slow");
        register_card.animate({ height: rheight, opacity: "1", top: "" }, "slow");
        login_card.hide("slow")
        register_card.show("slow")
        setTimeout(function () {
            $("#register_email").focus()
        }, 900)
        $("#slider").animate({ opacity: "0" }, 1).html("Login")
        $("#slider").animate({ opacity: "1" }, 2000).html("Register")

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
        $("#slider").animate({ opacity: "1" }, 2000).html("Login")
    });
});

