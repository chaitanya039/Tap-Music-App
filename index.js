console.log('welcome to, Cp_TapMusicApp');

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');

    const color = [
                    '#6c5ce7',
                    '#e84393',
                    '#4cd137',
                    '#fbc531',
                    '#0652DD',
                    '#d63031'
                ]
    
    pads.forEach((element, index) => {
        element.addEventListener('click', ()=> {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    });

    const createBubbles = (index)=>{
        // create bubbles
        const bubbles = document.createElement('div');
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = color[index];
        bubbles.style.animation = "jump 1s ease";
        bubbles.addEventListener("animationend", ()=>{
            visual.removeChild(bubbles);
        })
    }

})