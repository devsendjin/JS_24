const answers = [
    'Hello',
    'I\'m fine',
    'I\'m 24 years old',
    'I like coding',
    'No, thanks',
    'The weather is good',
    'The sky i s blue',
    'Sorry, i\'m busy now',
    'You are so boring',
    'I like relax music'
];

let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let sendMsg = async () => {
    let form = document.form_chat;
    let send = form.sendMessage;
    let get = form.getMessage;
    let chatText = '';

    if (get.value && send.value !== '') {
        get.value = `${get.value}\nMe: ${send.value}`;
    } else if (!get.value && send.value !== '') {
        chatText = "Me: " + send.value;
        get.value = chatText;
    } else {
        send.value = '';
        return;
    }

    send.value = '';
    get.value = `${get.value}\nBrowser: ${chat().then(()=> message).catch((err) => {console.log(err);})}`;
    // chat().then(()=> get.value = `${get.value}\nBrowser: ${chat().then(()=> message)}`)
};

function timeout(message, time = 0) {
    return new Promise(done => {
        setTimeout(() => done(message), time * 1000);
    });
}


async function randomMessage() {
    let message = answers[rand(0, 9)];
    console.log(message);
    return timeout(message, 1);
}

async function chat() {
    let message = await randomMessage();
    // return message;
}

$("#send-msg").on("click", sendMsg);