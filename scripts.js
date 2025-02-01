document.addEventListener("DOMContentLoaded", function () {
    console.log("scripts.js loaded and DOMContentLoaded fired.");

    const particlesContainer = document.querySelector(".particles");
    if (!particlesContainer) {
        console.error("No element with the class 'particles' found.");
    }

    // Create background audio element
    const audio = document.createElement("audio");
    audio.src = "Background/song.mp3"; // Ensure your song file is in the Background folder with this name
    audio.loop = true;
    audio.volume = 0.01; // Adjust volume as needed
    audio.autoplay = true; // Some browsers may require user interaction before playback
    document.body.appendChild(audio);
    console.log("Audio element created:", audio);

    // Get the music control button from the DOM
    const musicButton = document.getElementById("musicButton");
    if (!musicButton) {
        console.error("No music button found.");
    } else {
        console.log("Music button found:", musicButton);
        // Toggle music on button click
        musicButton.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                musicButton.innerText = "🔊 Pause Music";
            } else {
                audio.pause();
                musicButton.innerText = "🔈 Play Music";
            }
        });
    }

    // Function to create a single particle
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random size for each particle
        const size = Math.random() * 5 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random initial position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random movement values
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particle.style.setProperty("--move-x", `${Math.random() * 100 - 50}px`);
        particle.style.setProperty("--move-y", `${Math.random() * 100 - 50}px`);

        particlesContainer.appendChild(particle);

        // Remove particle after animation ends
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    // Generate particles at regular intervals
    setInterval(createParticle, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "F12") {
        event.preventDefault(); // Prevent default F12 behavior
        showEasterEgg();
    }
});

function showEasterEgg() {
    // Check if the message already exists
    if (document.getElementById("easterEggMessage")) return;

    // Create the Easter egg message
    const message = document.createElement("div");
    message.id = "easterEggMessage";
    message.innerHTML = `
    <p>I KNOW IT'S OPEN SOURCE</p>
    <p>DON'T TRY TO OPEN DEVTOOLS NAUGHTY BOY</p>
    `;

    // Apply styles
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.fontSize = "40px";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.color = "#ff0000";
    message.style.textShadow = "2px 2px 10px black";
    message.style.zIndex = "9999";
    message.style.padding = "20px";
    message.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    message.style.border = "5px solid red";
    message.style.borderRadius = "15px";
    message.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.8)";

    // Append to body
    document.body.appendChild(message);

    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}
