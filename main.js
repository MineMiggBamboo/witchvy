const x = document.getElementById("box").offsetWidth;
const y = document.getElementById("box").offsetHeight;
const height = window.innerHeight - y;
const width = window.innerWidth - x;
const myAudio = document.getElementById("audio");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function changeBtn() {
  let valueHeight = getRandomInt(0, height);
  let valueWidth = getRandomInt(0, width);
  document.getElementById("box").style.marginTop = valueHeight + "px";
  document.getElementById("box").style.marginLeft = valueWidth + "px";
}
function playAudio() {
  myAudio.play();
}
const webhookURL = "https://discord.com/api/webhooks/1293550267920547952/Q1BF8N_J7XbYmEl5IXrh16L27D7VutfdwHdJaNzTdcfQwbwn-q-S2hKbyS4gOVASFjk5"; // Replace with your Discord webhook URL

// Function to send a webhook message
function sendWebhookMessage(content) {
    const request = new XMLHttpRequest();
    request.open("POST", webhookURL);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "MineMigg Bot",
        avatar_url: "https://your-avatar-url-here", // Optional, add avatar URL if desired
        content: content
    };

    request.send(JSON.stringify(params));
}

// Play the audio if user agrees
function agree() {
    sendWebhookMessage("User đã đồng ý làm người yêu của bạn! 😍💖");
    playAudio(); // If you want to play some audio when agreed
}

// Handle the disagreement
function disagree() {
    sendWebhookMessage("User từ chối lời yêu của bạn! 😤💔");
    changeBtn(); // Call your changeBtn function if you want to alter button behavior
}

// Function to play audio (if applicable)
function playAudio() {
    var audio = document.getElementById("audio");
    if (audio) {
        audio.play();
    }
}

// Change button text or style when disagreeing (you can define this in any way you need)
function changeBtn() {
    const button = document.querySelector('.btn-outline-danger');
    button.innerHTML = 'Mình vẫn yêu bạn 😢';
    button.classList.replace('btn-outline-danger', 'btn-outline-secondary');
}
