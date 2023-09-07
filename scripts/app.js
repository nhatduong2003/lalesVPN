$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./Images/right-item.png" alt=""></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./Images/left-item.png" alt=""></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            },
        },
    ]
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const acctiveClass = "is-show";
toggle.addEventListener("click", function (){
    menu.classList.toggle(acctiveClass);
});

window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
        menu.classList.remove(acctiveClass);
    }
  });
