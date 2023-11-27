const { WebhookClient } = require('discord.js');

// Webhook Client
const webhookClient = new WebhookClient({ url: webhookURL });

// Message Send
function sendMessage() {
    webhookClient.send(config.messageContent)
    .then(() => console.log('message sent successfully!'))
    .catch(error => console.error('Error sending message:', error));
}

sendMessage();

//時間・回数指定によるメッセージ送信
let sentCount = 1;
const interval = setInterval(() => {
    if(sentCount < config.sendMessageCount) {
        sendMessage();
        sentCount++;
    }else {
        clearInterval(interval);
        webhookClient.destroy();
    }
}, config.sendMessageInterval); //0.1秒間
