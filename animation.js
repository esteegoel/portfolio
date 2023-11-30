 // update the position of boat based on scroll
 function updateBoatPosition() {
    const scrollY = window.scrollY || window.pageYOffset;
    const translateY = scrollY / 1; // from w3schools
    const minTop = 100;

    document.querySelector('.overlay').style.top = `calc(50% + ${translateY}px)`;
}

// listen for the scroll event and call  update function
window.addEventListener('scroll', updateBoatPosition);

updateBoatPosition();