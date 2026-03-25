// JavaScript для работы бургер-меню и снега
document.addEventListener('DOMContentLoaded', function() {
    // БУРГЕР-МЕНЮ
    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.querySelector('.nav');
    
    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        const navItems = document.querySelectorAll('.nav__item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ТАРИФЫ ИЗ URL
    const urlParams = new URLSearchParams(window.location.search);
    const tariff = urlParams.get('tariff');
    
    if (tariff) {
        const tariffField = document.getElementById('tariff-field');
        if (tariffField) {
            tariffField.value = tariff;
        }
    }

    // СОЗДАНИЕ SVG СНЕЖИНОК
    setTimeout(function() {
        const snowContainer = document.querySelector('.snow-container');
        if (snowContainer) {
            // Очистка контейнера от старых снежинок
            snowContainer.innerHTML = '';
            
            // SVG код белой снежинки
            const svgTemplate = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 4L11.9999 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.9999 12H3.99991" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.4999 8.4856L14.9999 11.9856L18.4999 15.4856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.49991 15.4856L8.99991 11.9856L5.49991 8.4856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.4999 18.4856L11.9999 14.9856L8.49991 18.4856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.49991 5.4856L11.9999 8.9856L15.4999 5.4856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            
            // Размеры снежинок
            const sizes = ['small', 'medium', 'large', 'xlarge'];
            
            // Создание 40-а снежинок с разными размерами
            for (let i = 1; i <= 40; i++) {
                const snowflake = document.createElement('div');
                const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
                
                snowflake.className = `snowflake s${i} ${randomSize}`;
                snowflake.innerHTML = svgTemplate;
                snowContainer.appendChild(snowflake);
            }
            
            console.log('✅ Создано 40 SVG снежинок');
        }
    }, 4500); // Через 4.5 секунды (после прелоадера)
    
    console.log('🎯 JavaScript загружен. SVG снежинки появятся через 4.5 секунды');
});
