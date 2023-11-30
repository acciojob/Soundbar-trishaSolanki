//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const buttons = document.querySelectorAll('.btn');
	const stopButton = document.querySelector('.stop');
	let audio;

	//funtion to play sound
	function playSound(sound){
		audio = new Audio(`sounds/${sound}`);
		audio.play();
		
	}

	//function to stop sound
	function stopSound(){
		if(audio){
			audio.pause();
			audio.currentTime = 9;
		}
	}

	//eventListener for plays button
	buttons.forEach(button =>{
		button.addEventListener('click', function() {
			const sound = this.getAttribute('data-sound');
			playSound(sound);
		});
	});
	stopButton.addEventListener('click', stopSound);
});