const activeEmployee = document.querySelector('.employee-active__photo');
const employeeList = document.querySelectorAll('.employee');

employeeList.forEach(miniImg => {
    miniImg.addEventListener('click', function (event) {
        activeEmployee.src = event.target.src;
    });
});

const markWaungBlock = document.querySelector('.mark-waungh');
const alexanderSmithBlock = document.querySelector('.alexander-smith');
const adrianaAddingtonBlock = document.querySelector('.adriana-addington');
const sokinaJueBlock = document.querySelector('.sokina-jue');
const markWaungPhoto = document.querySelector('.mark-waungh__photo');
const alexanderSmithPhoto = document.querySelector('.alexander-smith__photo ');
const adrianaAddingtonPhoto = document.querySelector('.adriana-addington__photo ');
const sokinaJuePhoto = document.querySelector('.sokina-jue__photo ');

alexanderSmithPhoto.addEventListener('click', function (e) {
    alexanderSmithBlock.classList.add('visible')
    adrianaAddingtonBlock.classList.remove('visible')
    markWaungBlock.classList.add('none')
    sokinaJueBlock.classList.remove('visible')
});

adrianaAddingtonPhoto.addEventListener('click', function (e) {
    alexanderSmithBlock.classList.remove('visible')
    adrianaAddingtonBlock.classList.add('visible')
    markWaungBlock.classList.add('none')
    sokinaJueBlock.classList.remove('visible')
});

sokinaJuePhoto.addEventListener('click', function (e) {
    alexanderSmithBlock.classList.remove('visible')
    adrianaAddingtonBlock.classList.remove('visible')
    markWaungBlock.classList.add('none')
    sokinaJueBlock.classList.add('visible')
});

markWaungPhoto.addEventListener('click', function (e) {
    alexanderSmithBlock.classList.remove('visible')
    adrianaAddingtonBlock.classList.remove('visible')
    markWaungBlock.classList.remove('none')
    sokinaJueBlock.classList.remove('visible')
});


// burger
const burgerEl = document.querySelector('.burger');
const menuMobileEl = document.querySelector('.menu');

burgerEl.addEventListener('click', function (e) {
    menuMobileEl.classList.toggle('menu__show')
});

// scroll
const scrollupBtn = document.querySelector('.scroll-up');

window.document.addEventListener('scroll', trackScroll);
scrollupBtn.addEventListener("click", goTop);
function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = 100;
    if (scrolled > coords) {
        scrollupBtn.classList.add("scroll-up__show");
    } else {
        scrollupBtn.classList.remove("scroll-up__show");
    }
}
function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);

    }
}

