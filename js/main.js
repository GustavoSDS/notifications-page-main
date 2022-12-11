let btnMarkAsRead = document.querySelector('#btnMarkAllRead');
let notifications = document.querySelector('#notifications');
let notificationActive = document.querySelectorAll('#notificationActive');
let notificationDot = document.querySelectorAll('#notificatioDot');

btnMarkAsRead.addEventListener('click', () => {
    notifications.innerText = '0';
    for (let i = 0; i < notificationActive.length; i++) {
        notificationActive[i].classList.remove("card__activities--active");
        notificationDot[i].style.display = "none";

    }
});