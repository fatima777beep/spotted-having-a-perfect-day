/* PAGE NAVIGATION */

function hideAllPages() {
document.querySelectorAll(".page").forEach(function(page) {
page.classList.remove("active");
});
}

function showHome() {
hideAllPages();
document.getElementById("home").classList.add("active");
}

function showMorning() {
hideAllPages();
document.getElementById("morning").classList.add("active");
}

function showEvening() {
hideAllPages();
document.getElementById("evening").classList.add("active");
}

function showNight() {
hideAllPages();
document.getElementById("night").classList.add("active");
}

/* SIGN IN */

function signIn() {
alert("Welcome back, darling. 💋");
}

/* LIVE NEW YORK CLOCK */

function updateClock() {

```
const options = {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
};

const time = new Intl.DateTimeFormat("en-US", options)
    .format(new Date());

document.getElementById("clock").textContent = time;
```

}

updateClock();

setInterval(updateClock, 1000);

/* IMAGE POPUP */

function openImage(image) {

```
const modal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");

expandedImage.src = image.src;
modal.style.display = "flex";
```

}

function closeImage() {
document.getElementById("imageModal").style.display = "none";
}

/* GOSSIP */

const gossipMessages = [
"Someone was spotted having the perfect day... and looking suspiciously fabulous.",
"Word on the street is that someone's keeping a very interesting secret.",
"Spotted: a girl who definitely knows how to make an entrance.",
"Apparently, the city has been waiting all day for her arrival.",
"Someone's plans tonight are looking much more interesting than yours.",
"I heard a little rumor... but darling, you didn't hear it from me.",
"The perfect day? Please. We both know the night is where the real story begins."
];

function gossip() {

```
const popup = document.getElementById("gossipPopup");
const text = document.getElementById("gossipText");

const randomNumber =
    Math.floor(Math.random() * gossipMessages.length);

text.textContent = gossipMessages[randomNumber];

popup.style.display = "block";
```

}

function closeGossip() {
document.getElementById("gossipPopup").style.display = "none";
}
