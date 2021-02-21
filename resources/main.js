'use strict';

const mobileMenuButton = document.getElementById("mobileMenuButton");
const innerMobileMenuSection = document.getElementById('innerMobileMenuSection');
const mainPageWrapper = document.getElementById('mainPageWrapper');

const mobileCloseMenuButton = document.getElementById("mobileCloseMenuButton");
console.log(mobileMenuButton);

mobileMenuButton.addEventListener('click', function() {
    console.log('click');

    innerMobileMenuSection.classList.remove('hidden');
    mainPageWrapper.classList.add('hidden');
    
});

mobileCloseMenuButton.addEventListener('click', function() {
    console.log('click');

    innerMobileMenuSection.classList.add('hidden');
    mainPageWrapper.classList.remove('hidden');
    
});