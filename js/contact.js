




function main() {
    const urlParams = new URLSearchParams(window.location.search);

    var userName = urlParams.get("name");
    var email = urlParams.get("email");
    var hp = urlParams.get("hp");
    var msg = urlParams.get("msg");

    var newsletter = urlParams.get("subscribe");

    document.getElementById("name").innerHTML = `name: ${userName}`;
    document.getElementById("email").innerHTML = `email: ${email}`;
    document.getElementById("hp").innerHTML = `hp: ${hp}`;
    document.getElementById("msg").innerHTML = `message: ${msg}`;

    document.getElementById("newsletter").innerHTML = newsletter ? "Thanks for subscribing !! :D" : "you didnt subscribe to the newsletter :c";

}


window.onload = main;







