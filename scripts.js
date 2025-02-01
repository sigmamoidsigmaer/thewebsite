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
