let coinStatus = document.querySelector("#coinBox");
let text = document.querySelector("#text");
text.innerText = "Click on Coin";

coinStatus.addEventListener("click", () => {
    text.innerText = "";
    let a = Math.floor(Math.random()*2);
    coinStatus.style = 'background-image: url("toss_animation.gif")';
    setTimeout(() => {
        if(a == 0){
            coinStatus.style = 'background-image: url("head.png"); box-shadow: 0px 0px 50px rgba(255, 0, 0, 0.526)';
            coin="HEAD";
        } else if (a == 1) {
            coinStatus.style = 'background-image: url("tail.png"); box-shadow: 0px 0px 50px rgba(0, 0, 255, 0.526)';
            coin="TAIL";
        }
        console.log(coin);
        text.innerText = coin;
    }, 2000);
});
