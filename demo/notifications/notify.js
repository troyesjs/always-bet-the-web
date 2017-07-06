(function(){

    const win = (value = -1) => {
        const rand = Math.floor(Math.random() * 5);

        window.console.log(`${rand} === ${value}`);

        return rand === parseInt(value, 10);
    };

    const notify = (title, message, icon) => {
        if( !('Notification' in window) || Notification.permission === 'denied' ) {
            return alert(message);
        }
        const createNotification = () => new Notification(title, {
            body : message,
            icon : icon
        });

        if(Notification.permission !== 'granted') {
            Notification.requestPermission( permission => {
                if(permission === 'granted') {
                    createNotification();
                }
            });
        } else {
            createNotification();
        }
    };

    const gambleLink = document.querySelector('.gamble');
    const betValue = document.querySelector('.bet');

    gambleLink.addEventListener('click', e => {
        e.preventDefault();

        const value = betValue.value;

        if(win(value)){
            notify('You win', `${value} was correct`, 'coins.png');
        } else {
            notify('Try again');
        }
    });

}());
