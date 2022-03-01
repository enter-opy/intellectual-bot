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
        timeuser.className = "timeuser"
        timeuser.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
        usertext.appendChild(timeuser);
        
        let indicator = document.createElement("li");
        indicator.className = "indicator";
        indicator.id = "indicator";

        let dot1 = document.createElement("span");
        dot1.className = "dot-1";
        let dot2 = document.createElement("span");
        dot2.className = "dot-2";
        let dot3 = document.createElement("span");
        dot3.className = "dot-3";

        messages.appendChild(indicator);
        indicator.appendChild(dot1);
        indicator.appendChild(dot2);
        indicator.appendChild(dot3);

        setTimeout(function () {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value.replace(' ', '%20')}`;
            let result = ""

            fetch(url)
            .then(response => response.json())
            .then(function(data) {
                console.log(data[0].meanings[0].definitions[0].definition);
                result = data[0].meanings[0].definitions[0].definition;

                let bottext = document.createElement("li");
                bottext.className = "bottext";
                bottext.innerHTML = result;
                messages.appendChild(bottext);
            
                let timebot = document.createElement("li");
                timebot.className = "timebot"
                timebot.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
                bottext.appendChild(timebot);
                messages.removeChild(indicator);
            })
            .catch(function(err) {
                let bottext = document.createElement("li");
                bottext.className = "bottext";
                bottext.innerHTML = "What in the observable universe is that?";
                messages.appendChild(bottext);
            
                let timebot = document.createElement("li");
                timebot.className = "timebot"
                timebot.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
                bottext.appendChild(timebot);
                messages.removeChild(indicator);
            })         
        }, 500);
        
        
    }
}

