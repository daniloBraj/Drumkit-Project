document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
        'b': 'boom',
        'c': 'clap',
        'h': 'hihat',
        'k': 'kick',
        'o': 'openhat',
        'r': 'ride',
        's': 'snare',
        't': 'tink',
        'm': 'tom'
    };

    const playSound = (soundFile) => {
        const audio = new Audio(`sounds/${soundFile}.wav`);
        audio.play();
    };

    const handleClick = (event) => {
        const buttonId = event.target.id;
        const soundKey = buttonId.substring(0, 1);
        if (sounds.hasOwnProperty(soundKey)) {
            playSound(sounds[soundKey]);
        }
    };

    // Event listener for button clicks
    document.querySelectorAll('.soundButtons button').forEach(button => {
        button.addEventListener('click', handleClick);
    });

    // Event listener for keydown events
    window.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        for (const soundKey in sounds) {
            if (key === soundKey) {
                playSound(sounds[key]);
                break; // Once sound is played, exit loop
            }
        }
    });
});
