 // update the position of boat based on scroll
 function updateBoatPosition() {
    const scrollY = window.scrollY || window.pageYOffset;
    const translateY = scrollY / 1;
    const minTop = 60;

    // calculate max top value from viewport height
    const maxTop = window.innerHeight * 0.75;

    // set  top value within  range of minTop and maxTop
    const finalTop = Math.min(maxTop, Math.max(minTop, translateY));

    document.querySelector('.overlay').style.top = `calc(50% + ${finalTop}px)`;
}

// listen for the scroll event and call update function
window.addEventListener('load', updateBoatPosition);
window.addEventListener('scroll', updateBoatPosition);

updateBoatPosition();