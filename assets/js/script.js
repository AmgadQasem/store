function scrollNav(direction) {
    const container = document.getElementById('navScroll');
    const scrollAmount = 200;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}


function scrollTrending(direction) {
    const container = document.getElementById('trendingScroll');
    const scrollAmount = 300; // move this value as needed
    
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function scrollFeaturedStores(direction) {
    const container = document.getElementById('featuredStoresScroll');
    const scrollAmount = 300; // Same as trending section
    
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function scrollTeamPicks(direction) {
    const container = document.getElementById('teamPicksScroll');
    const scrollAmount = 300; // Same as trending section
    
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function scrollLatestProducts(direction) {
    const container = document.getElementById('latestProductsScroll');
    const scrollAmount = 300; // Same as other sections
    
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}
// end main-home section ==========

// When the offcanvas is shown, copy the sidebar content
document.getElementById('filterSidebar').addEventListener('show.bs.offcanvas', function () {
    const sidebarContent = document.querySelector('.sidebar').cloneNode(true);
    document.getElementById('mobileSidebar').innerHTML = '';
    document.getElementById('mobileSidebar').appendChild(sidebarContent);
});

// Get the elements
const categoriesWrapper = document.querySelector('.categories');
const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');

// Function to update button visibility
function updateScrollButtons() {
    // Show/hide left button
    if (categoriesWrapper.scrollLeft <= 0) {
        leftBtn.style.opacity = "0";
        leftBtn.style.pointerEvents = "none";
    } else {
        leftBtn.style.opacity = "1";
        leftBtn.style.pointerEvents = "auto";
    }

    // Show/hide right button
    if (categoriesWrapper.scrollLeft >= categoriesWrapper.scrollWidth - categoriesWrapper.clientWidth - 1) {
        rightBtn.style.opacity = "0";
        rightBtn.style.pointerEvents = "none";
    } else {
        rightBtn.style.opacity = "1";
        rightBtn.style.pointerEvents = "auto";
    }
}

// Add click handlers for the buttons
leftBtn.addEventListener('click', () => {
    categoriesWrapper.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    categoriesWrapper.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

// Toggle active state on buttons
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
// end clothes-type section ==========

// trend-sudia section ==========
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelector('.categories');
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');

    leftBtn.addEventListener('click', () => {
        categories.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        categories.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });

    // Toggle active state on buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
// end trend-sudia section ==========

function toggleDescription() {
    const descriptionText = document.getElementById('descriptionText');
    const gradientOverlay = document.getElementById('gradientOverlay');
    const showMoreBtn = document.getElementById('showMoreBtn');

    if (descriptionText.style.maxHeight === '100px') {
        descriptionText.style.maxHeight = '1000px';
        gradientOverlay.style.display = 'none';
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up ms-1"></i>';
    } else {
        descriptionText.style.maxHeight = '100px';
        gradientOverlay.style.display = 'block';
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down ms-1"></i>';
    }
}

function scrollProducts(direction) {
    const container = document.querySelector('.products-scroll');
    const scrollAmount = container.offsetWidth * 0.8;

    if (direction === 'right') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}
// end product-info section ==========