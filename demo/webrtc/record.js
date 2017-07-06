(function(){

    const video    = document.querySelector('video');
    const recorder = document.querySelector('.record');
    const play     = document.querySelector('.play');

    const capture = () => {
        return navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: { width: 800, height: 600 }
            });
    };

    play.disabled = true;

    recorder.addEventListener('click', e => {
        e.preventDefault();

        recorder.disabled = true;

        capture()
            .then( mediaStream => video.srcObject = mediaStream )
            .then( () => {
                play.disabled = false;
            })
            .catch( err => window.console.error(err) );
    });

    play.addEventListener('click', e => {
        e.preventDefault();

        if(!play.disabled){

            video.play();
        }
    });

}());
