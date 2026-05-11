document.addEventListener("DOMContentLoaded", () => {

    // Array of our specific images (URL encoded and updated to .jpeg)
    const images = [
        "Images/Event.jpeg",
        "Images/Garden%20photo%202.jpeg",
        "Images/Greenhouse.jpeg",
        "Images/Herb%20photo.jpeg",
        "Images/Market%20front.jpeg",
        "Images/Produce%20Bussel.jpeg",
        "Images/garden%20photo.jpeg"
    ];

    const collageContainer = document.getElementById("collage-bg");

    // Function to generate a random number between min and max
    const randomRange = (min, max) => Math.random() * (max - min) + min;

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "collage-image";

        // Randomize size between 200px and 350px width
        const size = randomRange(200, 350);
        img.style.width = `${size}px`;
        img.style.height = `${size * 0.8}px`; // Keep a slight rectangular aspect ratio

        // Randomize opacity between 0.3 (faint) and 0.7 (clearer)
        img.style.opacity = randomRange(0.3, 0.7);

        // Randomize rotation between -15 degrees and +15 degrees for a scattered look
        const rotation = randomRange(-15, 15);
        img.style.transform = `rotate(${rotation}deg)`;

        // Layout Logic: Split images to flank the center form
        // Even indexes go left, odd indexes go right
        const verticalPos = randomRange(5, 70); // Spread them vertically (5% to 70% from top)
        img.style.top = `${verticalPos}%`;

        if (index % 2 === 0) {
            // Left Flank (Keep them between -5% and 20% of the screen width)
            img.style.left = `${randomRange(-5, 20)}%`;
        } else {
            // Right Flank (Keep them between 70% and 90% of the screen width)
            img.style.left = `${randomRange(70, 90)}%`;
        }

        collageContainer.appendChild(img);
    });
});