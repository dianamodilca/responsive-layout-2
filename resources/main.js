'use strict';

const mobileMenuButton = document.getElementById("mobileMenuButton");
const innerMobileMenuSection = document.getElementById('innerMobileMenuSection');
const firstPageMobile = document.getElementById('firstPageMobile');
const headerWrapper = document.getElementById('headerWrapper');
const footerWrapper = document.getElementById('footerWrapper');

const mobileCloseMenuButton = document.getElementById("mobileCloseMenuButton");
console.log(mobileMenuButton);

mobileMenuButton.addEventListener('click', function() {
    console.log('click');
    // nu avem nevoie de if aici, pentru ca noi ori vedem menu icon, ori meniul in sine de unde putem sa inchidem
    // valabil si mai jos, la mobileCloseMenuButton
    if(innerMobileMenuSection.classList.contains('hidden')) { 
        // nu inteleg de ce ai luat toate selectiile astea separat, nu este practica solutia ta. Noi trebuie sa ne legam de elementul parinte, nu de fiecare element component, mai ales in acest caz cand manipulam parintele cu totul
        // la fel si mai jos
        innerMobileMenuSection.classList.remove('hidden');
        firstPageMobile.classList.add('hidden');
        firstPageMobile.classList.remove('visible');
        headerWrapper.classList.add('hidden');
        headerWrapper.classList.remove('visible');
        footerWrapper.classList.add('hidden');
        footerWrapper.classList.remove('visible');

    } else { 
        innerMobileMenuSection.classList.add('hidden');
        firstPageMobile.classList.remove('hidden');
        headerWrapper.classList.remove('hidden');
        footerWrapper.classList.remove('hidden');
    }
    
});

mobileCloseMenuButton.addEventListener('click', function() {
    console.log('click');
    
    if(innerMobileMenuSection.classList.contains('hidden') == false) { 
        innerMobileMenuSection.classList.add('hidden');
        firstPageMobile.classList.remove('hidden');
        headerWrapper.classList.remove('hidden');
        footerWrapper.classList.remove('hidden');

    } else { 
        innerMobileMenuSection.classList.remove('hidden');
        firstPageMobile.classList.add('hidden');
        firstPageMobile.classList.remove('visible');
        headerWrapper.classList.add('hidden');
        headerWrapper.classList.remove('visible');
        footerWrapper.classList.add('hidden');
        footerWrapper.classList.remove('visible');
    }
    
});