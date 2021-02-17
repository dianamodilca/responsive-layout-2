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
    
    if(innerMobileMenuSection.classList.contains('hidden')) { 
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