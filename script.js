function send() {
    let messages = document.getElementById("messages");
    let textbox = document.getElementById("textbox");

    if (textbox.value.trim()) {
        let question = document.createElement("li");

        question.innerHTML = textbox.value;
        messages.appendChild(question);

        const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${textbox.value.replace(' ', '%20')}`

        result = requestData(url)

        let reply = document.createElement("li");

        if (typeof(result) == "undefined") {
            reply.innerHTML = "What in the observable universe?"
        }
        else if (result.includes(' may refer to:') || result.includes(' can refer to:')) {
            reply.innerHTML = "What in the observable universe?"
        }
        else {
            reply.innerHTML = result
        }

        messages.appendChild(reply)
    }

    textbox.value = "";
}

function requestData(url) {
    axios.get(url)
    .then(function(response) {
        const data = response.data;
        
        // extract needed data from json response
        const id = Object.keys(data.query.pages);
        const result = data.query.pages[id[0]].extract;

        return result
    }).catch(function(err) {
        console.log("Network error");
    })
}

