$(function () {

//// default



/// login

    $('.login-block__input').focusin(function () {
        $('.login-block__info').css("display", "none");
        $(this).children('.login-block__info').css("display", "flex");
    });

    $('.login-block__info').click(function () {
        $('.login-block__info').css("display", "none");
    });

    $('body').click(function () {
        $('.login-block__info').css("display", "none");
    });

    $(".login-block__input > input").click(function (e) {
        e.stopPropagation();
    });

    $('.inst1').click(function () {
        $('.inst-1').css("display", "flex");

    });

    $('.inst2').click(function () {
        $('.inst-2').css("display", "flex");

    });

    $('.login-block__instruction > span').click(function () {

        $(this).parent('.login-block__instruction').fadeOut();

    });


    /// map



    $('.custom-dialog__close').click(function () {
        $('.block').removeClass('bg-black');
        $('.custom-dialog').css('display', 'none');
        $('body').removeClass('bg-black');

    })


    ///// choose

    $('.choose-nav__item ').click(function () {
        $('.choose-menu').toggleClass('d-block');
        $('.summary-wrapper').toggleClass('bg-black');
        $('.bg-click').toggleClass('bg-black');

    });

    $('body').click(function () {
        $('.choose-menu').removeClass('d-block');
        $('.summary-wrapper').removeClass('bg-black');
        $('.bg-click').removeClass('bg-black');

    });

    $(".choose-menu, .choose-nav__item").click(function (e) {
        e.stopPropagation();
    });


    ///number

    let cityNumber = [
        "Seçim edin",
        "Bakı / 012",
        "Abşeron / 012 3",
        "Sumqayıt / 018 6",
        "Bərdə / 020 20",
        "Ucar / 020 21",
        "Ağsu / 020 22",
        "Ağdaş / 020 23",
        "Qobustan / 020 24",
        "Kürdəmir / 020 25",
        "Şamaxı / 020 26",
        "Göyçay / 020 27",
        "İsmayıllı / 020 28",
        "Zərdab / 020 29",
        "Hacıqabul / 021 20",
        "Şirvan / 021 21",
        "Beyləqan / 021 22",
        "Sabirabad / 021 23",
        "İmişli / 021 24",
        "Salyan / 021 25",
        "Neftçala / 021 26",
        "Ağcabədi / 021 27",
        "Saatlı / 021 28",
        "Gəncə / 022 2",
        "Göygöl / 022 20",
        "Daşkəsən / 022 21",
        "Ağstafa / 022 22",
        "Tərtər / 022 23",
        "Goranboy / 022 24",
        "Samux / 022 27",
        "Qazax / 022 29",
        "Şəmkir / 022 30",
        "Tovuz / 022 31",
        "Gədəbəy / 022 32",
        "Yevlax / 022 33",
        "Naftalan / 022 35",
        "Siyəzən / 023 30",
        "Xızı / 023 31",
        "Xaçmaz / 023 32",
        "Quba / 023 33",
        "Şabran / 023 35",
        "Qusar / 023 38",
        "Qəbələ / 024 20",
        "Oğuz / 024 21",
        "Zaqatala / 024 22",
        "Şəki / 024 24",
        "Qax / 024 25",
        "Mingəçevir / 024 27",
        "Balakən / 024 29",
        "Yardımlı / 025 20",
        "Masallı / 025 21",
        "Astara / 025 22",
        "Cəlilabad / 025 24",
        "Lənkəran / 025 25",
        "Lerik / 025 27",
        "Biləsuvar / 025 29",
        "Xocalı / 026 20",
        "Laçın / 026 21",
        "Xankəndi / 026 22",
        "Qubadlı / 026 23",
        "Əskəran / 026 24",
        "Zəngilan / 026 25",
        "Şuşa / 026 26",
        "Kəlbəcər / 026 27",
        "Ağdərə / 026 28",
        "Xocavənd / 026 29",
        "Hadrut / 026 30",
        "Füzuli / 026 31",
        "Ağdam / 026 32",
        "Cəbrayıl / 026 38",
        "Naxtel şəbəkəsi üzrə / 036 40",
        "Babək / 036 41",
        "Şərur / 036 42",
        "Şahbuz / 036 43",
        "Culfa / 036 46",
        "Ordubad / 036 47",
        "Kəngərli / 036 48",
        "Sədərək / 036 49",
        "Naxçıvan / 036 5",


    ];

    let mobNumber = [
        'Azercell / 50', 'Azercell / 51', 'Bakcell / 55', 'Nar / 70', 'Nar / 77'
    ];

    $('#chooseNumber').change(function () {

        var $_this = $(this);
        let a = $(this).children().text();

        let valNumber = $(this).val();


        if (valNumber == 2) {
            $('#chooseNumberList').empty().append('<option>Seçim edin</option>');

            for (i = 0; i < mobNumber.length; i++) {
                $('#chooseNumberList').append('<option>' + mobNumber[i] + '</option>');
            }
            ;

        } else {
            $('#chooseNumberList').empty().append('<option>Seçim edin</option>');

            for (i = 0; i < cityNumber.length; i++) {
                $('#chooseNumberList').append('<option>' + cityNumber[i] + '</option>');
            }
        }
        ;

    });


    $('.choose-one').click(function (e) {
        e.preventDefault();
        $('.choose-label').removeClass('active');
        $(this).addClass('active');
    });

    $('.choose-multi').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        let a = $('.choose-only').hasClass('active');
        let b = $('.choose-multi').hasClass('active');

        if (a && b) {
            $('.error-message').css('display', 'block')
        }
    });


    $('.family__checkbox.disabled').click(function (e) {
        e.preventDefault();
    })

    $('.family-radio__item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

   //// address choose

    $('.address-choose2').click(function () {
        $('.addressChoose').toggleClass('d-block');
        $('.addLink').attr('href', 'address2.html');

    });

    $('.address-choose1').click(function () {
        $('.addressChoose').removeClass('d-block');
        $('.addLink').attr('href', 'address-add.html');
    })

    $('.address-choose3').click(function () {
        $('.addressChoose').removeClass('d-block');
        $('.addLink').attr('href', 'non-residental-area3.html');
    })

    $('.adressShow').click(function () {
        $('.addressChoose').toggleClass('d-block');
    })

    $('.address-que').click(function () {
       let family =  $(this).hasClass('anotherFamily');
        if(family) {
           $('.pageForm').removeClass('d-none')
        }else {
            $('.pageForm').addClass('d-none')

        }

    })

});

var checkInfo = $('.input-block').prop('checked');

$('.checkedChange').click(function (e) {
    checkInfo = $('.input-block').prop('checked');
    if(!checkInfo){
        e.preventDefault();
    }
});
