// Search Bar
$(document).on('click', '.search-btn', function() {
    $('.search-box').toggleClass('active')
});


// Login and Sign up

$(document).on('click', '.user', function() {
    $('.form').addClass('login-active')
});
$(document).on('click', '.form-cancel', function() {
    $('.form').removeClass('login-active')
});

$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active').removeClass('login-active')
});
$(document).on('click', '.form-cancel', function() {
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});
$(document).on('click', '.forget', function() {
    $('.form').removeClass('sign-up-active').addClass('login-active')
});


// Slider
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

// Feature Slider
// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth: true,
//         loop: true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         }
//     });
// });

// Fix Menu onScroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navigation').addClass('fix-nav');

    } else {
        $('.navigation').removeClass('fix-nav');
    }
});

// Click to Scroll Top
$('.move span').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.move').addClass('move-active');

    } else {
        $('.move').removeClass('move-active');
    }
});

// Responsive Menu
$(document).ready(function() {
    $('.toggle').click(function() {
        $('.navigation').toggleClass('active')
    })
});

// ********************Filter Menu********************
const menu = [{
        id: 1,
        title: "Trousers",
        category: "Trousers",
        price: 15.99,
        img: "./images/p-1.png",

    },
    {
        id: 2,
        title: "Shoes",
        category: "Shoes",
        price: 13.99,
        img: "./images/p-2.png",

    },
    {
        id: 3,
        title: "Shirt",
        category: "Shirt",
        price: 6.99,
        img: "./images/p-3.png",

    },
    {
        id: 4,
        title: "Jacket",
        category: "Jacket",
        price: 20.99,
        img: "./images/p-4.png",

    },
    {
        id: 5,
        title: "Jacket",
        category: "Jacket",
        price: 22.99,
        img: "./images/p-4.png",

    },
    {
        id: 6,
        title: "Shirt",
        category: "Shirt",
        price: 18.99,
        img: "./images/p-3.png",

    },
    {
        id: 7,
        title: "Shoes",
        category: "Shoes",
        price: 8.99,
        img: "./images/p-2.png",

    },
    {
        id: 8,
        title: "Trousers",
        category: "Trousers",
        price: 12.99,
        img: "./images/p-1.png",

    },
    {
        id: 9,
        title: "Shirt",
        category: "Shirt",
        price: 12.99,
        img: "./images/p-3.png",

    },
    {
        id: 10,
        title: "Trousers",
        category: "Trousers",
        price: 12.99,
        img: "./images/p-1.png",

    },
    {
        id: 11,
        title: "Jacket",
        category: "Jacket",
        price: 12.99,
        img: "./images/p-4.png",

    },
    {
        id: 12,
        title: "Shoes",
        category: "Shoes",
        price: 12.99,
        img: "./images/p-2.png",

    },

];

const sectionCenter = document.querySelector('.product-container');
const filterBtns = document.querySelectorAll('.filter-btn')

// Load Items
window.addEventListener("DOMContentLoaded", function() {
    displayListItems(menu);
});
// Filter Items Via Btns
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem
            }
        });
        if (category === "all") {
            displayListItems(menu)
        } else {
            displayListItems(menuCategory)
        }

    });
});




function displayListItems(menuItem) {
    let displayList = menuItem.map(function(item) {

        return `<div class="product-box">

        <div class="product-img">
            <a href="#" class="add-cart">
                <i class="fas fa-shopping-cart"></i>
            </a>
            <img class="p-img" src=${item.img} alt=${item.title}>
        </div>
        <!-- Details -->
        <div class="product-details">
            <a href="#" class="p-name">${item.title}</a>
            <span class="p-price">${item.price}</span>
        </div>
    </div>`

    })
    displayList = displayList.join('')
    sectionCenter.innerHTML = displayList
}