//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    const audios = document.querySelectorAll('audio');

    // Function to play the audio based on the data-sound attribute
    function playAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
    }

    // Event listeners for each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const soundSrc = this.getAttribute('data-sound');
            playAudio(soundSrc);
        });
    });

    // Event listener for the stop button
    stopButton.addEventListener('click', function() {
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    });
});
