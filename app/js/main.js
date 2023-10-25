const header = document.querySelector("header"),
  headerList = document.querySelector(".header__list"),
  btnOpenMobileMenu = document.querySelector(".js-header-menu"),
  setsTabsInfo = document.querySelectorAll(".sets-open__item"),
  setsCardsBtns = document.querySelectorAll(".sets-card__btn"),
  popup = document.querySelector(".popup-form"),
  popupThank = document.querySelector(".popup-thank"),
  html = document.querySelector("html"),
  contactForm = document.forms.contactForm,
  contactFormPopup = document.forms.contactFormPopup;

// function headerFixed(header) {
//   const scrolledPx = window.scrollY;
//   header.classList.toggle("fixed", scrolledPx >= 50);
//   header.classList.toggle("animation", scrolledPx >= 200);
//   header.classList.toggle("opacity", scrolledPx >= 500);
// }

function openMobileMenu(target) {
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    headerList.classList.remove("active");
    html.classList.remove("lock");
  } else {
    target.classList.add("active");
    headerList.classList.add("active");
    html.classList.add("lock");
  }
}

function setsTabs(target) {
  setsTabsInfo.forEach((item, index) => {
    if (target.id === item.dataset.tab) {
      item.classList.add("active");
      target.closest(".sets-card__item").classList.add("active");
    } else {
      item.classList.remove("active");
      document
        .querySelectorAll(".sets-card__item")
        [index].classList.remove("active");
    }
  });
}

function scrollToTabs() {
  const pixelsForScroll = document
    .querySelector(".sets-open")
    .getBoundingClientRect();
  const scrollTop = pixelsForScroll.top + window.scrollY;

  window.scrollTo({
    top: scrollTop - 30,
    behavior: "smooth",
  });
}

function setsCardSwiper() {
  const setsSwiper = new Swiper(".sets-swiper", {
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: 3,
    loop: false,
    freeMode: true,

    navigation: {
      nextEl: ".sets-swiper__arrow--next",
      prevEl: ".sets-swiper__arrow--prev",
    },

    breakpoints: {
      360: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      380: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      460: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      560: {
        slidesPerView: 1.6,
      },
      660: {
        slidesPerView: 1.9,
      },
      768: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 2.4,
      },
      1000: {
        slidesPerView: 2.4,
      },
      1200: {
        slidesPerView: 2.5,
      },
    },
  });
}

function loopRemoveItems(classN) {
  document.querySelectorAll(classN).forEach((item) => {
    item.classList.remove("active");
  });
}

function openTabs(target, className) {
  loopRemoveItems(`.${className}__item`);
  loopRemoveItems(`.js-${className}__tab`);

  document.querySelectorAll(`.${className}__right`).forEach((tab) => {
    if (tab.dataset.filter === target.id) {
      tab.classList.add("active");
      target.classList.add("active");
      target.closest(`.${className}__item`).classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function tabsFaq(target) {
  if (!target.classList.contains("active")) {
    loopRemoveItems(".js-faq-tabs");
    loopRemoveItems(".faq-tabs__content");

    target.classList.add("active");
    target
      .closest(".faq-tabs__title")
      .nextElementSibling.classList.add("active");
  } else {
    target.classList.remove("active");
    target
      .closest(".faq-tabs__title")
      .nextElementSibling.classList.remove("active");
  }
}

function reviewsSwiper() {
  const setsSwiper = new Swiper(".reviews__swiper", {
    direction: "horizontal",
    spaceBetween: 100,
    slidesPerView: 2,
    loop: false,
    freeMode: true,

    navigation: {
      nextEl: ".reviews__arrow--next",
      prevEl: ".reviews__arrow--prev",
    },

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      800: {
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
}
reviewsSwiper();

function openPopup() {
  popup.classList.add("active");
  html.classList.add("lock");
}

function validationForm(e, form) {
  let count = 0;
  [...form.elements].forEach((input) => {
    if (
      input.classList.contains("contact-form__input") &&
      input.value.length > 0
    ) {
      count++;
    }
  });

  if (count >= 3) {
    if (form.name === "contactFormPopup") {
      form.closest("section").classList.remove("active");
    }
    popupThank.classList.add("active");
    html.classList.add("lock");
    e.preventDefault();

    [...form.elements].forEach((input) => {
      input.value = "";
    });
  }
}

if (window.innerWidth < 1200) {
  setsCardSwiper();
}

// window.addEventListener("scroll", () => {
//   headerFixed(header);
// });

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("js-header-menu")) {
    openMobileMenu(target);
  }

  if (window.innerWidth < 770 && target.classList.contains("header__link")) {
    headerList.classList.remove("active");
    html.classList.remove("lock");
    document.querySelector(".js-header-menu").classList.remove("active");
  }

  if (target.classList.contains("sets-card__btn--more")) {
    setsTabs(target);
    scrollToTabs();
  }
  if (target.classList.contains("js-panels__tab")) {
    openTabs(target, "panels");
  }
  if (target.classList.contains("js-baseboard__tab")) {
    openTabs(target, "baseboard");
  }

  if (target.classList.contains("js-faq-tabs")) {
    tabsFaq(target);
  }

  if (target.classList.contains("js-openPopup")) {
    openPopup("add");
  }

  if (target.classList.contains("js-close-popup")) {
    popup.classList.remove("active");
    html.classList.remove("lock");
  }

  if (target.classList.contains("js-openThankPopup")) {
    validationForm(e, target.closest("form"));
  }

  if (target.classList.contains("popup-thank__close")) {
    popupThank.classList.remove("active");
    html.classList.remove("lock");
  }
});
