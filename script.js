function send() {
    let messages = document.getElementById("messages");
    let textbox = document.getElementById("textbox");

    if (textbox.value.trim()) {
        let question = document.createElement("li");

        question.innerHTML = textbox.value;
        messages.appendChild(question);
    }

    textbox.value = "";
}