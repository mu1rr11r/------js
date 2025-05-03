var listitem = document.querySelectorAll('.item img');
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');

listitem.forEach(img => {
    img.addEventListener('click', function (e) {
        lightboxContainer.classList.replace('d-none', 'd-flex');
        var imgSrc = e.target.getAttribute('src');
        lightboxItem .style.backgroundImage = `url(${imgSrc})`;
    });
});
