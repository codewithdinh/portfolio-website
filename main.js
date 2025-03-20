// Mobile Navigation Toggle
document.getElementById('menuButton').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuButton = document.getElementById('menuButton');
    
    if (!navMenu.contains(event.target) && event.target !== menuButton) {
        navMenu.classList.remove('active');
    }
});

document.getElementById('poemForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();

    if (input1 && input2) {
        // Array of poem templates
        const poems = [
            `Roses are red, violets are blue,<br>
            With ${input1} and ${input2}, a poem for you.<br>
            The ${input1} shines bright, the ${input2} feels true,<br>
            Together they make a perfect view.`,

            `Once upon a time, there was ${input1},<br>
            Who danced in the light of the ${input2} sun.<br>
            Together they sang, together they played,<br>
            A friendship so strong, it never decayed.`,

            `The ${input1} soared high, the ${input2} swam deep,<br>
            In a world of dreams, where secrets they keep.<br>
            They met in the stars, where wishes come true,<br>
            A tale of adventure for me and you.`,

            `Oh ${input1}, so bold and bright,<br>
            Paired with ${input2}, a dazzling sight.<br>
            Together they conquer, together they shine,<br>
            A story of wonder, yours and mine.`,

            `In the land of ${input1} and ${input2},<br>
            Magic unfolds, and skies turn blue.<br>
            A journey begins, with laughter and cheer,<br>
            A poem of joy for all to hear.`
        ];

        // Select a random poem template
        const randomPoem = poems[Math.floor(Math.random() * poems.length)];

        // Display the selected poem
        document.getElementById('poemOutput').innerHTML = randomPoem;
    } else {
        document.getElementById('poemOutput').innerHTML = 'Please enter both words!';
    }
});

document.getElementById('resetButton').addEventListener('click', function () {
    // Clear the input fields
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';

    // Reset the poem output to its initial state
    document.getElementById('poemOutput').innerHTML = '';
});