$(function() {
    let filter = $('[data-f]');
    let categori = $('[data-categori]');
    $(filter).click(function (e) { 
        e.preventDefault();
        let categor = $(this).data('f');
        $(categori).each(function() {
            let workCat = $(this).data('categori');
            if (categor == "all") {
                $(this).removeClass("hide");
            } else {
                if (workCat != categor) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass("hide");
                }
            }
        });
    });
})

let a = 'active';

$(".buttom-mobale-menu").click(function (e) { 
    e.preventDefault();
    $(".mobale-menu ul.memu, .buttom-mobale-close-menu").addClass(a);
    
});
$('.buttom-mobale-close-menu').click(function (e) { 
    e.preventDefault();
    $(".mobale-menu ul.memu, .buttom-mobale-close-menu").removeClass(a);
});



let intr = setInterval(function() {
    let widtnScreen2 =  (($('html').outerWidth()) < 768);
    if (widtnScreen2 == true){
       if ($(".buttom-mobale-categor").hasClass('active')) {
        
       } else{
            $(".book-a-table .span-section").replaceWith('<p class="span-section">Mon - Fri: <span> 8PM - 10PM, </span> Sat - Sun: <span>  8PM - 3AM, </span><br> Phone: <span>  +40 729 131 637/+40 726 458 782 </span></p>');
            $(".delicions-menu .menu-list").prepend('<buttom class="mobale-filter-button">Filter</buttom');
            $('.menu-categori').prepend('<div class="buttom-mobale-categor active"><div class="close-button"><div class="button-line"></div><div class="button-line"></div></div> </div>');
        }
    } else{
        $(".book-a-table .span-section").replaceWith('<p class="span-section">Mon - Fri: <span> 8PM - 10PM, </span> Sat - Sun: <span>  8PM - 3AM, </span> Phone: <span>  +40 729 131 637/+40 726 458 782 </span></p>');
        $("buttom").remove('.mobale-filter-button');
        $('div').remove('.buttom-mobale-categor');
        
    }
}, 1000);



let intr2 = setInterval(function() {
    let widtnScreen1 =  (($('html').outerWidth()) < 567);
    if (widtnScreen1 == true) {
        if ($('.private-events  p.span-section').hasClass('active')) {
            return false;
        } else {
            $('.private-events p.span-section').replaceWith('<p class="span-section active">For private events please call: <br><span> +40 729 131 637/+40 726 458 782 </span><br> or use the contact form.</p>');
            let cop = $('form.contacts input[type="button"]').clone(); 
            $(' form.contacts .contact-info').before(cop);
            $('form.contacts input[type="button"]:last-child').remove();
        }
    } else {
        $('.private-events  p.span-section').replaceWith('<p class="span-section">For private events please call: <span> +40 729 131 637/+40 726 458 782 </span> or use the contact form.</p>');
        let nextChild = $('form.contacts .contact-info').prev('input[type="button"]');
        if ($(nextChild).hasClass('contact-buttom')) {
            let cop = $('form.contacts input[type="button"]').clone(); 
            $('form.contacts input[type="button"]').remove();
            $('form.contacts .contact-info').after(cop);
        } 
    }
}, 1000);




let intr3 = setInterval(function() {
    let widtnScreen1 =  (($('html').outerWidth()) < 992);
    if ( widtnScreen1 == true) {
        if (!$('.mobale-menu').hasClass('active')) {
            $('nav').after('<div class="mobale-menu active"><div class="buttom-mobale-menu"><div class="botom-menu-line" style="animation-delay:4.1s"></div><div class="botom-menu-line" style="animation-delay:3.7s"></div><div class="botom-menu-line" style="animation-delay:3.5s"> </div></div><div class="buttom-mobale-close-menu"><div class="botom-menu-line"> </div><div class="botom-menu-line"> </div></div><ul class="memu"><li class="etem-menu"><a href="../index.html">HOME</a></li><li class="etem-menu l"><a href="#" id="ABOUT">ABOUT</a></li><li class="etem-menu l"><a href="#" id="TEAM">TEAM</a></li><li class="etem-menu l"><a href="#" id="BOOKING">BOOKING</a></li><li class="etem-menu l"><a href="#" id="MENU">MENU</a></li><li class="etem-menu l"><a href="#" id="GALERIE">GALERIE</a></li><li class="etem-menu l"><a href="#" id="EVENTS">EVENTS</a></li><li class="etem-menu l"><a href="#" id="CONTACT">CONTACT</a></li></ul></div>');
        } else{
            $('.row.header-center .col-1:last-child .header-link a').css({'animation-duration': '4.2s'});
            $('.mobale-filter-button').click(function (e) { 
                e.preventDefault();
                $('.delicions-menu .container .menu-categori').css({'left':"-22%",'transition':'all 0.5s'});
            });
            $('.close-button').click(function (e) { 
                e.preventDefault();
                $('.delicions-menu .container .menu-categori').css({'left':"-130%",'transition':'all 0.5s'});
            });
        }
    } else {
        $('.mobale-menu.active').remove();
    }
}, 1000);





//scroll link navigation
let linkID = $('.row.row-cols-3.header-top a.navig-link.l');

$(linkID).click(function (e) { 
    e.preventDefault();
    $("html,body").stop().animate({ scrollTop: $("." + this.id).offset().top }, 1200);
});


//scroll link nagigation mobale
let lenkIDMobale = $('header .container .mobale-menu ul.memu li.etem-menu.l a');

$(lenkIDMobale).click(function (e) { 
    e.preventDefault();
    $(".mobale-menu ul.memu, .buttom-mobale-close-menu").removeClass(a);
    $("html,body").stop().animate({ scrollTop: $("." + this.id).offset().top }, 1200);
});

//scroll header image
let scrollImg = $('header .container .row.header-center .col-8 .bown-button');

$(scrollImg).click(function (e) { 
    e.preventDefault();
    $("html,body").stop().animate({ scrollTop: $('main').offset().top }, 1200);
});




function initMap() {
    var uluru = {lat: 52.0879453, lng: 23.6933571};
    var map = new google.maps.Map(
        document.getElementById('#maps'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}



