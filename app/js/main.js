


let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosistion = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

    if (scrollPosistion() > lastScroll && !containHide() && scrollPosistion() > defaultOffset) {
        header.classList.add('hide');
        // console.log('down');
    }
    else if (scrollPosistion() < lastScroll && containHide()) {
        header.classList.remove('hide');
        // console.log('up');
    }

    lastScroll = scrollPosistion();
})