window.addEventListener('DOMContentLoaded', function () {

    // выпадающее меню
    document.querySelector('#header__burger').addEventListener('click', function () {
            document.querySelector('#header__dropdown').classList.toggle('is-open'),
                document.querySelector('#header__burger-svg').classList.toggle('is-open'),
                document.querySelector('#header__burger-svg__open').classList.toggle('is-open')
        })
        // выпадающее меню - конец
        ,
        // раскрывающееся поле поиска

        document.querySelector('#hsbm').addEventListener('click', function () {
            document.querySelector('#hsfm').classList.toggle('uncover'),
                document.querySelector('#hsbm').classList.toggle('uncover'),
                document.querySelector('#hbsm').classList.toggle('uncover'),
                document.querySelector('#hbsmu').classList.toggle('uncover')
        })

        // раскрывающееся поле поиска - конец
        ,
        // выпадающие списки
        document.querySelector('#hmb1').addEventListener('click', function () {
            document.querySelector('#hmd1').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hmd2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd5').classList.remove('header__menu-dropdown-open'),

                document.querySelector('#hms1').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hms2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms5').classList.remove('header__menu-dropdown-open')
        }),
        document.querySelector('#hmb2').addEventListener('click', function () {
            document.querySelector('#hmd1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd2').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hmd3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd5').classList.remove('header__menu-dropdown-open'),

                document.querySelector('#hms1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms2').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hms3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms5').classList.remove('header__menu-dropdown-open')
        }),
        document.querySelector('#hmb3').addEventListener('click', function () {
            document.querySelector('#hmd1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd3').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hmd4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd5').classList.remove('header__menu-dropdown-open'),

                document.querySelector('#hms1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms3').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hms4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms5').classList.remove('header__menu-dropdown-open')
        }),
        document.querySelector('#hmb4').addEventListener('click', function () {
            document.querySelector('#hmd1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd4').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hmd5').classList.remove('header__menu-dropdown-open'),

                document.querySelector('#hms1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms4').classList.toggle('header__menu-dropdown-open'),
                document.querySelector('#hms5').classList.remove('header__menu-dropdown-open')
        }),
        document.querySelector('#hmb5').addEventListener('click', function () {
            document.querySelector('#hmd1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hmd5').classList.toggle('header__menu-dropdown-open'),

                document.querySelector('#hms1').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms2').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms3').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms4').classList.remove('header__menu-dropdown-open'),
                document.querySelector('#hms5').classList.toggle('header__menu-dropdown-open')
        })

    // выпадающие списки - конец

    // hero - слайдер
    const heroswiper = new Swiper('.hero__swiper-container', {
        // Optional parameters
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 10000
        },
        speed: 3000,
    })
    // hero - слайдер - конец

    // gallery - слайдер

    const mediaQuery = window.matchMedia('(min-width: 576px)');

    function handleTabletChange(e) {


        const galleryswiper = new Swiper('.gallery__swiper-container', {
            speed: 1500,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            loopFillGroupWithBlank: true,
            breakpointsBase: 'container',
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,

            // Responsive breakpoints
            breakpoints: {
                290: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 34
                },
                594: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 34
                },
                908: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup: 3,
                    spaceBetween: 34
                },
                1150: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup: 3,
                    spaceBetween: 50
                }
            }
        })

    }

    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);


    // gallery - слайдер - конец

    // gallery - селект
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    })
    // gallery - селект - конец

    // catalog - табы
    document.querySelectorAll('.catalog__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.catalog__tabs-content').forEach(function (tabContent) {
                tabContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')

            document.querySelectorAll('.catalog__btn').forEach(function (btnDesactivate) {
                btnDesactivate.classList.remove('is-active')
            })
            document.querySelector(`[data-path="${path}"]`).classList.add('is-active')
        })
    })

    // catalog - табы - конец

    // catalog - табы - персона

    document.querySelectorAll('.catalog__accordion-item-btn__russia').forEach(function (CatRussiaBtn) {
        CatRussiaBtn.addEventListener('click', function (CatRussiaEvent) {
            const path = CatRussiaEvent.currentTarget.dataset.path
            document.querySelectorAll('.catalog__person-card__russia').forEach(function (CatRussiaContent) {
                CatRussiaContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
            document.querySelector('#catalog__anchor-russia').scrollIntoView()
        })
    })

    document.querySelectorAll('.catalog__accordion-item-btn__france').forEach(function (CatFranceBtn) {
        CatFranceBtn.addEventListener('click', function (CatFranceEvent) {
            const path = CatFranceEvent.currentTarget.dataset.path
            document.querySelectorAll('.catalog__person-card__france').forEach(function (CatFranceContent) {
                CatFranceContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
            document.querySelector('#catalog__anchor-france').scrollIntoView()
        })
    })

    document.querySelectorAll('.catalog__accordion-item-btn__germany').forEach(function (CatGermanyBtn) {
        CatGermanyBtn.addEventListener('click', function (CatGermanyEvent) {
            const path = CatGermanyEvent.currentTarget.dataset.path
            document.querySelectorAll('.catalog__person-card__germany').forEach(function (CatGermanyContent) {
                CatGermanyContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
            document.querySelector('#catalog__anchor-germany').scrollIntoView()
        })
    })

    document.querySelectorAll('.catalog__accordion-item-btn__italy').forEach(function (CatItalyBtn) {
        CatItalyBtn.addEventListener('click', function (CatItalyEvent) {
            const path = CatItalyEvent.currentTarget.dataset.path
            document.querySelectorAll('.catalog__person-card__italy').forEach(function (CatItalyContent) {
                CatItalyContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
            document.querySelector('#catalog__anchor-italy').scrollIntoView()
        })
    })

    document.querySelectorAll('.catalog__accordion-item-btn__belgium').forEach(function (CatBelgiumBtn) {
        CatBelgiumBtn.addEventListener('click', function (CatBelgiumEvent) {
            const path = CatBelgiumEvent.currentTarget.dataset.path
            document.querySelectorAll('.catalog__person-card__belgium').forEach(function (CatBelgiumContent) {
                CatBelgiumContent.classList.add('visually-hidden')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
            document.querySelector('#catalog__anchor-belgium').scrollIntoView()
        })
    })

    // catalog - табы - персона - конец

    // catalog - accordion

    $(function () {
        $("#accordion__france").accordion();
    });

    $(function () {
        $("#accordion__germany").accordion();
    });

    $(function () {
        $("#accordion__italy").accordion();
    });

    $(function () {
        $("#accordion__russia").accordion();
    });

    $(function () {
        $("#accordion__belgium").accordion();
    });

    // catalog - accordion - конец

    // events - кнопка активации скрытых элементов

    document.querySelector('#events__btn').addEventListener('click', function () {
        document.querySelectorAll('.events__item').forEach(function (event) {
            event.classList.remove('visually-hidden')
        })
        document.querySelector('#events__btn').classList.add('is-hidden')
    })


    // events - кнопка активации скрытых элементов - конец

    // events - слайдер

    const eventsswiper = new Swiper('.events__swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000
        },
        speed: 1000,
        pagination: {
            el: '.events__swiper-pagination',
            type: 'bullets',
        },
        spaceBetween: 20,
    })

    // events - слайдер - конец

    // press - слайдер

    const pressswiper = new Swiper('.press__swiper-container', {
        speed: 1500,
        pagination: {
            el: '.press__swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.press__swiper-button-next',
            prevEl: '.press__swiper-button-prev',
        },

        loopFillGroupWithBlank: true,
        breakpointsBase: 'container',
        slidesPerView: 3,
        slidesPerColumn: 1,
        slidesPerGroup: 3,
        spaceBetween: 50,

        // Responsive breakpoints
        breakpoints: {
            668: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            630: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                spaceBetween: 50
            },
            1150: {
                slidesPerView: 3,
                slidesPerColumn: 1,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        }
    })

    // press - слайдер - конец

    // press - выпадающий список

    document.querySelector('#press__ch-btn').addEventListener('click', function () {
        document.querySelector('#press__ch-list').classList.toggle('is-hidden')
        document.querySelector('#press__ch-btn').classList.toggle('is-closed')
        document.querySelectorAll('.press__checkbox-item').forEach(function (checkboxrefresh) {
            checkboxrefresh.classList.remove('is-off')
        })
        document.querySelectorAll('.press__checkbox').forEach(function (chOff) {
            chOff.checked = false
        })
        document.querySelectorAll('.press__list-item-btn').forEach(function (deColor) {
            deColor.classList.remove('is-colored')
        })
    })

    // press - выпадающий список - конец

    // press - окрашивание кнопок выключения чекбоксов

    document.querySelector('#press__ch-1__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-01').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-2__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-02').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-3__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-03').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-4__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-04').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-5__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-05').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-6__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-06').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-7__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-07').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-8__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-08').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-9__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-09').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-10__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-10').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-11__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-11').classList.toggle('is-colored')
    })
    document.querySelector('#press__ch-12__mob').addEventListener('click', function () {
        document.querySelector('#press__ch-btn-12').classList.toggle('is-colored')
    })

    // press - окрашивание кнопок выключения чекбоксов - конец

    // press - выключение чекбоксов

    document.querySelector('#press__ch-btn-01').addEventListener('click', function () {
        document.querySelector('#press__ch-1__mob').checked = false
        document.querySelector('#press__ch-item-01').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-02').addEventListener('click', function () {
        document.querySelector('#press__ch-2__mob').checked = false
        document.querySelector('#press__ch-item-02').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-03').addEventListener('click', function () {
        document.querySelector('#press__ch-3__mob').checked = false
        document.querySelector('#press__ch-item-03').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-04').addEventListener('click', function () {
        document.querySelector('#press__ch-4__mob').checked = false
        document.querySelector('#press__ch-item-04').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-05').addEventListener('click', function () {
        document.querySelector('#press__ch-5__mob').checked = false
        document.querySelector('#press__ch-item-05').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-06').addEventListener('click', function () {
        document.querySelector('#press__ch-6__mob').checked = false
        document.querySelector('#press__ch-item-06').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-07').addEventListener('click', function () {
        document.querySelector('#press__ch-7__mob').checked = false
        document.querySelector('#press__ch-item-07').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-08').addEventListener('click', function () {
        document.querySelector('#press__ch-8__mob').checked = false
        document.querySelector('#press__ch-item-08').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-09').addEventListener('click', function () {
        document.querySelector('#press__ch-9__mob').checked = false
        document.querySelector('#press__ch-item-09').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-10').addEventListener('click', function () {
        document.querySelector('#press__ch-10__mob').checked = false
        document.querySelector('#press__ch-item-10').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-11').addEventListener('click', function () {
        document.querySelector('#press__ch-11__mob').checked = false
        document.querySelector('#press__ch-item-11').classList.add('is-off')
    })
    document.querySelector('#press__ch-btn-12').addEventListener('click', function () {
        document.querySelector('#press__ch-12__mob').checked = false
        document.querySelector('#press__ch-item-12').classList.add('is-off')
    })

    // press - выключение чекбоксов - конец



    // press - оформление инпутов


    function discharge0() {
        $('#press__price-from').val(String($('#press__price-from').val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }
    discharge0();
    $('#press__price-from').keyup(function () {
        discharge0();
    });

    function discharge1() {
        $('#press__price-to').val(String($('#press__price-to').val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }
    discharge1();
    $('#press__price-to').keyup(function () {
        discharge1();
    });

    function discharge0m() {
        $('#press__price-from__mob').val(String($('#press__price-from__mob').val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }
    discharge0m();
    $('#press__price-from__mob').keyup(function () {
        discharge0m();
    });

    function discharge1m() {
        $('#press__price-to__mob').val(String($('#press__price-to__mob').val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }
    discharge1m();
    $('#press__price-to__mob').keyup(function () {
        discharge1m();
    });

    // press - оформление инпутов


    // projects - слайдер

    const projectsswiper = new Swiper('.projects__swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        autoplay: true,
        speed: 2000,

        // Navigation arrows
        navigation: {
            nextEl: '.projects__swiper-button-next',
            prevEl: '.projects__swiper-button-prev',
        },

        // loopFillGroupWithBlank: true,
        breakpointsBase: 'window',
        slidesPerView: 3,
        slidesPerColumn: 1,
        slidesPerGroup: 3,
        spaceBetween: 50,

        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            460: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                spaceBetween: 34
            },
            992: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
                spaceBetween: 50
            },
            1400: {
                slidesPerView: 3,
                slidesPerColumn: 1,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        }
    });

    // projects - слайдер -конец

    // contacts - маскирование

    var selector = document.getElementById("contacts__tel");

    var im = new Inputmask("+7 (999) 999 - 99 - 99");
    im.mask(selector);

    // contacts - маскирование - конец

    // contacts - валидация

    new JustValidate('.contacts__form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
        },
        colorWrong: '#D11616',

        messages: {
            name: {
                minLength: 'Имя должно содержать минимум 2 символа',
                maxLength: 'Имя должно содержать максимум 20 символов',
                required: 'Поле обязательно для заполнения'
            },
            tel: 'Номер должен содержать 10 символов'
        },
    })

    // contacts - валидация - конец

    // contacts - яндекс карта 

    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("contacts__map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.7584, 37.6045],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/contacts/contacts-map-icon.svg',
            iconImageSize: [20, 20],
            // iconImageOffset: [-3, -42]
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);

        // удаление элементов карты

        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');

        myMap.controls.add('zoomControl', {
            size: "medium",
            float: 'none',
            position: {
                top: '275px',
                right: '15px'
            }
        });

        myMap.controls.add('geolocationControl', {
            size: "medium",
            float: 'none',
            position: {
                top: '360px',
                right: '15px'
            }
        });
    }
    // contacts - яндекс карта - конец

})



window.addEventListener('resize', function (event) {

    // galleryswiper.update()

    // accordion - refresh

    $("#accordion__france").accordion("refresh");
    $("#accordion__germany").accordion("refresh");
    $("#accordion__italy").accordion("refresh");
    $("#accordion__russia").accordion("refresh");
    $("#accordion__belgium").accordion("refresh");

});