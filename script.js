function send() {
    let messages = document.getElementById("messages");
    let textbox = document.getElementById("textbox");

    const value = textbox.value;
    textbox.value = ""
    textbox.focus();

    const date = new Date();

    if (value.trim()) {
        let usertext = document.createElement("li");
        usertext.className = "usertext";

        usertext.innerHTML = value;
        messages.appendChild(usertext);

        let timeuser = document.createElement("li");
        timeuser.className = "time"
        timeuser.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
        usertext.appendChild(timeuser);

        //
        let bottext = document.createElement("li");
        bottext.className = "bottext";

        bottext.innerHTML = value;
        messages.appendChild(bottext);

        let timebot = document.createElement("li");
        timebot.className = "time"
        timebot.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
        bottext.appendChild(timebot);
        //
    }
}